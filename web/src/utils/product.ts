interface PropsImages {
  id: string;
  url: string;
}

export interface EletronicsProps {
  id: string;
  name: string;
  price: number;
  item: string;
  description: string;
  brand: string;
  images: PropsImages[];
}

export interface SneakersProps {
  id: string;
  name: string;
  price: number;
  description: string;
  genre: string;
  category: string;
  brand: string;
  design?: string;
  images: PropsImages[];
}