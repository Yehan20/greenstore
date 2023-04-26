import { item } from "../types/types";

// Contains the custom array methods to extract differenct parts of items

const getCustomItems=(items:item[])=>{
    const LIMITS = {
        vegetables: 3,
        fruits: 3,
      };
    

    let vegLimit=1;
    let fruitLimit=1; 
    
    let custom = items.filter((item:item,index:number)=>{
          

         if(item.type==='Fruit' && item.id===index+1 && fruitLimit<=LIMITS.fruits){ 
            fruitLimit++
            return item;
         }
          if(item.type==='Vegetables' && item.id===index+1 && vegLimit<=LIMITS.vegetables){
            vegLimit++
            return item
         }
        return null
    })


    return custom
}

// const searchItems=(items:item[],param:string)=>{
//     // const{items}=useAppSelector((state)=>state.Cart)
//     //  console.log(items)
//     const searchedItems=items.filter((item)=>item.Name===param);
//     console.log(searchItems);
// }

const getItemsType=(items:item[],filterType:string)=>{
  let updatedItems:item[]=[];
  updatedItems=(filterType==='Fruit')?getFruits(items):(filterType==='Vegetables')?getVeg(items):items
  return updatedItems;  
}

const getFruits = (items:item[])=>items.filter((item)=>item.type==='Fruit')

const getVeg = (items:item[])=>items.filter((item)=>item.type==='Vegetables')

export {
      getCustomItems,
      getFruits,
      getVeg,
      getItemsType
}