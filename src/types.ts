import React, { ReactChildren, ReactChild, ReactElement } from 'react';

export interface IItem {
  id: number;
  img: string;
  alt: string;
  description: string;
  name: string;
  price: number;
  quantity?: number;
}

export interface ProductProp {
  product: {
    id: number;
    img: string;
    alt: string;
    description: string;
    name: string;
    price: number;
    quantity?: number;
  };
}

export interface ButtonProps {
  bg: string;
  text: string;
  width: string;
  height: string;
  clicked?: () => void;
  children: React.ReactElement | string;
}

export interface CardContainerProps {
  bg: string;
  text: string;
  width: string;
  height: string;
  mobHeight: string;
  children: ReactElement | ReactElement[];
}

export interface IconProps {
  children: React.ReactElement;
  size: string;
  color: string;
}

export interface ILinks {
  href: string;
  text: string;
}

export interface IFooterColumnData {
  id: number;
  category: string;
  links: Array<ILinks>;
}

export interface IPropFooterColumnData {
  data: IFooterColumnData;
}

export interface IFollowUsData {
  id: number;
  text: string;
  link: React.ReactElement;
}

export interface IPropFollowUsData {
  data: IFollowUsData;
}

export interface IPropsChildren {
  children: ReactChild | ReactChildren;
}

export interface NavItemProps {
  sidebar: boolean;
  closeMenu: () => void;
}

export interface IProduct {
  id: number;
  img: string;
  alt: string;
  description: string;
  name: string;
  price: number;
  quantity?: number | undefined;
}

export interface ProductContextType {
  products: IProduct[];
}

export interface IState {
  cartItems: IItem[];
  itemCount: number;
  total: number;
  checkout: boolean;
}

export interface CartContextType {
  setState?: (state: IState) => void;
  addProduct: (product: IProduct) => void;
  increase: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  decrease: (product: IProduct) => void;
  clearCart: () => void;
  cartItems: IItem[];
  itemCount: number;
  total: number;
  checkout: boolean;
}
