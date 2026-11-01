export interface Testimonial {
  id: string;
  author: string;
  role: string;
  vehiclePurchased: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  isDemonstration: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Олександр М.",
    role: "Підприємець, Київ",
    vehiclePurchased: "Porsche Cayenne Coupe Turbo GT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "14.10.2024",
    comment:
      "Шукав авто в особливій комплектації. Команда REZAR GROUP за 4 дні знайшла екземпляр у Мюнхені з повною прозорою історією обслуговування. Доставка, митне оформлення та детейлінг перед передачею — на найвищому рівні.",
    isDemonstration: true,
  },
  {
    id: "t2",
    author: "Валерій К.",
    role: "IT-директор, Львів",
    vehiclePurchased: "BMW M8 Competition Gran Coupe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "28.09.2024",
    comment:
      "Вражений персональним ставленням: детальний відеозвіт товщиноміром ще до підписання договору, офіційна перевірка на дилері в Німеччині. Жодних прихованих комісій — сума збіглася до цента.",
    isDemonstration: true,
  },
  {
    id: "t3",
    author: "Ірина Д.",
    role: "Власниця юридичної фірми, Одеса",
    vehiclePurchased: "Mercedes-Benz G 63 AMG",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "05.09.2024",
    comment:
      "Автомобіль доставили просто під офіс у закритому евакуаторі в ідеальному стані. Поставили на облік та оформили КАСКО без моєї участі у держустановах. Економія часу та нервів колосальна.",
    isDemonstration: true,
  },
  {
    id: "t4",
    author: "Максим С.",
    role: "Інвестор, Дніпро",
    vehiclePurchased: "Audi RS6 Avant Performance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "19.08.2024",
    comment:
      "Працюю з REZAR вже втретє — оновлюю сімейний автопарк лише через них. Преміум-рівень відчувається у кожному повідомленні, фотозвіті та пункті контракту.",
    isDemonstration: true,
  },
];
