import { ReactNode } from "react";

export interface ContentContainerInterface {
  children: ReactNode;
}

export interface DrawerInterface {
  isOpen: boolean;
  handleOpenDrawer(a: boolean): void;
}

export interface IProducts {
  products: [
    {
      id?: number;
      title?: string;
      price?: number;
      description?: string;
      category?: string;
      image: string;
      rating?: {
        rate?: number;
        count?: number;
      };
    }
  ];
}
