export interface IItem {
    id:number 
   img: any
   alt: string
   description: string
   name: string
   price: number
   quantity: number
}
export interface ProductProp  {
    product:{
       id:number 
       img: any
       alt: string
       description: string
       name: string
       price: number
       quantity: number
    }
} 
export type ButtonProps = {
    bg: string
    text: string
    width: string
    height: string
    clicked?: () => void
    children:React.ReactElement | string
  }
export type CardContainerProps = {
    bg: string
    text: string
    width: string
    height: string
    children: any
}
export type IconProps = {
    children: React.ReactElement
    size: string
    color:string
}

