interface PropsImages {
  id: string;
  url: string;
}

export interface RootProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  images: PropsImages[];
  Sdesign?: string;
  Sgenre?: string;
  Eitem?: string;
}

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  description: string;
  brand: string;
  category: string;
  genre: string;
  type: string;
  deleted: boolean;
  images: PropsImages[];
}
