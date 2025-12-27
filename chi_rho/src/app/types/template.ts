export type Template = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  // Add any other properties that are used in your templates object
  [key: string]: any; // This allows for additional properties
};
