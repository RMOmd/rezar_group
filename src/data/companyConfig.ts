export interface CompanyConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  workHours: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "REZAR GROUP",
  tagline: "Преміальний автомобільний сервіс та продаж авто з європейською історією",
  phone: "+380 (XX) XXX-XX-XX",
  phoneRaw: "#",
  email: "concierge@rezar-group.com",
  address: "м. Київ, адреса за запитом",
  workHours: "Пн-Сб: 10:00 — 20:00, Нд: за попереднім записом",
  telegram: "#",
  whatsapp: "#",
  instagram: "#",
};
