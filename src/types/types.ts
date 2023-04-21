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
  amount?:number;
  type:string
}

export type someProductProps={
   productItems:item[];
}
export interface cartProps{
  total:number;
  totalAmount:number;
  items:item[] |[];
  cart:item[] 
  status:string;
  error?:string;
}