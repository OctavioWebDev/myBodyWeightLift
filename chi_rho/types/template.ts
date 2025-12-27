export type Template = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  duration: string;
  level: string;
  frequency?: string;
  focus?: string;
  features: readonly string[];
  previewImage?: string;
};
