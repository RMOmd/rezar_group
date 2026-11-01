"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

const STORAGE_KEY = "rezar_favorite_vehicle_ids";
const SYNC_EVENT_NAME = "rezar_favorites_updated";

export interface FavoritesContextType {
  favoriteIds: string[];
  favoritesCount: number;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string, e?: React.MouseEvent) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  isLoaded: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

function readFavoritesFromStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Normalize items: support both simple string ID or object with id
      return parsed.map((item) => (typeof item === "string" ? item : item?.id)).filter(Boolean);
    }
  } catch {
    // Storage read error
  }
  return [];
}

function writeFavoritesToStorage(ids: string[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    // Broadcast event across same tab
    window.dispatchEvent(
      new CustomEvent(SYNC_EVENT_NAME, { detail: ids })
    );
  } catch {
    // Storage write error
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize on client mount
  useEffect(() => {
    const initial = readFavoritesFromStorage();
    setFavoriteIds(initial);
    setIsLoaded(true);

    // Cross-component sync within same window
    const handleLocalSync = (event: Event) => {
      const customEvent = event as CustomEvent<string[]>;
      if (customEvent.detail && Array.isArray(customEvent.detail)) {
        setFavoriteIds(customEvent.detail);
      } else {
        setFavoriteIds(readFavoritesFromStorage());
      }
    };

    // Cross-tab sync via storage event
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setFavoriteIds(readFavoritesFromStorage());
      }
    };

    window.addEventListener(SYNC_EVENT_NAME, handleLocalSync);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(SYNC_EVENT_NAME, handleLocalSync);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Toggle favorite with chronological ordering (newest prepended to front)
  const toggleFavorite = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFavoriteIds((prev) => {
      const exists = prev.includes(id);
      // If adding: PREPEND to front so latest added is at index 0 (ordered by addition time)
      const next = exists
        ? prev.filter((item) => item !== id)
        : [id, ...prev.filter((item) => item !== id)];

      writeFavoritesToStorage(next);
      return next;
    });
  }, []);

  const addFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [id, ...prev];
      writeFavoritesToStorage(next);
      return next;
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      if (!prev.includes(id)) return prev;
      const next = prev.filter((item) => item !== id);
      writeFavoritesToStorage(next);
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavoriteIds([]);
    writeFavoritesToStorage([]);
  }, []);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const value = useMemo(
    () => ({
      favoriteIds,
      favoritesCount: favoriteIds.length,
      isFavorite,
      toggleFavorite,
      addFavorite,
      removeFavorite,
      clearFavorites,
      isLoaded,
    }),
    [
      favoriteIds,
      isFavorite,
      toggleFavorite,
      addFavorite,
      removeFavorite,
      clearFavorites,
      isLoaded,
    ]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextType {
  const context = useContext(FavoritesContext);
  if (context) {
    return context;
  }

  // Graceful fallback if rendered outside provider (e.g. testing)
  return {
    favoriteIds: [],
    favoritesCount: 0,
    isFavorite: () => false,
    toggleFavorite: () => {},
    addFavorite: () => {},
    removeFavorite: () => {},
    clearFavorites: () => {},
    isLoaded: true,
  };
}
