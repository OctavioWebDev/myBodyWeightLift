export interface Template {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  duration: string;
  level: string;
  features: string[];
  previewImage?: string;
}
