import { item } from "../types/types";

// Contains the custom array methods to extract differenct parts of items




const getCustomItems=(items:item[])=>{
    const LIMITS = {
        vegetables: 3,
        fruits: 3,
      };
    

    let vegLimit=1;
    let fruitLimit=1; 
    let number = 1;
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

export {
      getCustomItems
}