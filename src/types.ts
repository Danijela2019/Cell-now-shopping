import { ReactNode } from "react"

export interface IItem {
    id:number 
   img: string
   alt: string
   description: string
   name: string
   price: number
   quantity: number
}

export interface ProductProp  {
    product:IItem
} 

export interface ButtonProps  {
    bg: string
    text: string
    width: string
    height: string
    clicked?: () => void
    children:React.ReactElement | string
  }

export interface CardContainerProps {
    bg: string
    text: string
    width: string
    height: string
    children: any
}

export interface IconProps  {
    children: React.ReactElement
    size: string
    color:string
}

export interface ILinks {
    href: string,
    text: string
}

export interface IFooterColumnData {
        id:number,
        category:string,
        links: Array<ILinks>
    }

export interface IPropFooterColumnData {
    data:IFooterColumnData
}

export interface IFollowUsData {
    id:number,
    text: string,
    link: React.ReactElement
}

export interface IPropFollowUsData {
    data: IFollowUsData
}

export interface IPropsChildren {
    children: ReactNode;
}
