export type ColorType={
    green: string;
    dark: string;
    grey: string;
    textClr: string;
    HeadingFont:string,
    ParaFont:string,
    ExtraFont:string
  }

 export type CartProps={
    setShowCart:React.Dispatch<React.SetStateAction<Boolean>>;
    showCart:Boolean;

}
  


export type item={
  id:number;
  Name:string;
  price:number;
  ext:string;
  src:string;
  amount:number;
  type:string
}

export type someProductProps={
   productItems:item[];
}
export interface cartProps{
  totalPrice:number;
  totalAmount:number;
  items:item[] |[];
  cart:item[] ;
  singleItem:item ;
  searchItems:item[];
  status:string;
  singleItemState:string;
  singleItemError?:string;
  error?:string;
  filterType:string;
}