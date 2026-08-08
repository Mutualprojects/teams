export type EventCategory = "All" | "Pro League" | "International" | "Corporate" | "Grassroots";

export interface LegacyEvent {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  category: "Pro League" | "International" | "Corporate" | "Grassroots";
  folder: string;
  teams?: string;
  organizer?: string;
  coverImage: string;
  images: string[];
  description: string;
}
