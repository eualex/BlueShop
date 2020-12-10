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