interface IItem {
    id:number 
   img: any
   alt: string
   description: string
   name: string
   price: number
   quantity: number
}
interface ProductProp  {
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
type ButtonProps = {
    bg: string
    text: string
    width: string
    height: string
    clicked?: () => void
    children:React.ReactElement | string
  }
  type CardContainerProps = {
    bg: string
    text: string
    width: string
    height: string
    children: any
}

export type {IItem, ProductProp,ButtonProps,CardContainerProps}