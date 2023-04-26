import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { getItemsType } from '../custom';
import { cartProps,item } from '../types/types';


const inital:cartProps = {
    items:[], // items from api
    searchItems:[], // searching array
    cart:[],
    summary:[],
    singleItem:{ id:0, Name: '', price: 0, ext: '',src: '', amount:0, type:'',desc:''},
    singleItemState:'idle',
    singleItemError:'',
    totalPrice:0,
    totalAmount:0,
    toggleHide:false,
    status:'idle',
    error:'',
    filterType:'all',
    toastMessage:{color:'default',message:''}
    
}

// async methods
export const fetchData= createAsyncThunk('items/getItems',async()=>{
   //url='http://localhost:3001/items/ https://fruit-vegi-list-api.cyclic.app/items
     try{
        const response = await axios.get('https://fruit-vegi-list-api.cyclic.app/items');
        //[...response.data].forEach(i=>console.table(i.Name))
        return [...response.data]
     }catch(error:unknown){
    
        if(error instanceof Error)  {
         
         if(error.message=='Network Error') throw  new SyntaxError('network error')
         return error.message
      }
     }

})

export const fetchItem=  createAsyncThunk('items/getItem',async(ext:string)=>{
     try{
       const response  =await axios.get('https://fruit-vegi-list-api.cyclic.app/items/'+ext)
     //  console.log(response.data)
       return {...response.data};

     }catch(error:unknown){
          if(error instanceof Error){

            if(error.message=='Network Error') throw  new SyntaxError('network error')
            return error.message
          }
     }
})


const CartSlice =createSlice({
   name:"Cart",
   initialState:inital,
   reducers:{
      addCart(state,action){
         const singleItem= action.payload.singleItem;
         const amount = action.payload.amount;

         const modifiedItem:item={
            ...singleItem,amount:singleItem.amount + amount,price:singleItem.price * amount
         }
         let updatedCart:item[]=[...state.cart];

         const isExisting = state.cart.filter((cartItem)=>cartItem.id===modifiedItem.id).length // checks  for a new item lengith
       
         if(isExisting>0){ // if there is  same item then update exisiting item other wise  add a new items
            updatedCart = updatedCart.map((cartItem:item)=>{
                  if(cartItem.id===singleItem.id) return {  ...cartItem,amount:cartItem.amount+ amount ,price:((singleItem.price * amount)+cartItem.price)   }
      
                  return cartItem
            });

            return {
               ...state,cart:[...updatedCart],toggleHide:!state.toggleHide
               ,toastMessage:{color:'success',message:'Added to Basket'},summary:[],
            }  
        }
        
        // if no match return the existing items , with the modified item
         return {
            ...state,cart:[...updatedCart,modifiedItem],toggleHide:!state.toggleHide,
            toastMessage:{color:'success',message:'Added to Cart'},summary:[]
         }
      },
      calculateTotal(state){
         const totalPrice = state.cart.reduce((initial,cartItem)=>{
              let  total = initial + cartItem.price;
              return total;
         },0)
         return {
          ...state,totalPrice
         }
      },
      checkout(state){
          return {
            ...state,cart:[],summary:state.cart,toggleHide:!state.toggleHide,toastMessage:{color:'info',message:`Thanks for your payment of RS: ${state.totalPrice.toString()} items will be delivered within 3 hrs`}
          }
      },
       emptyCart(state){
         return {
         ...state,cart:[],toastMessage:{message:'Cart Empty',color:'warning'},toggleHide:!state.toggleHide,totalPrice:0
         }
      },
      removeItem(state,action){
        const id = action.payload;
        let cartItems = [...state.cart].filter(cartItem=>cartItem.id!==id);
        if(cartItems.length<1){
          return {
            ...state,cart:cartItems,toastMessage:{message:'Cart is Empty',color:'warning'},
              toggleHide:!state.toggleHide
          }
        }
        return {
         ...state,cart:cartItems , toastMessage:{color:'error',message:'Removed from Cart'},toggleHide:!state.toggleHide,
       }
        
      },
      reset(state){
         //state.searchItems=state.items
         return {
            ...state,searchItems:state.items
         }
      }
      ,
      cartRefreshOnToggle(state){
          return {
            ...state,summary:[],totalPrice:0, toastMessage:{message:'Please Order Something',color:'default'}
          }
      }
      ,
      searchItem(state,action){

          let filterByType =getItemsType([...state.items],state.filterType);

          const regex = new RegExp(action.payload, 'i');
          filterByType= filterByType.filter((item) => regex.test(item.Name));
          return {
            ...state,searchItems:filterByType
          }
        //  state.searchItems=filterByType;       
      },

      setType(state,action){
         state.filterType=action.payload;
         //state.searchItems=state.items;
      },

      updateInCart(state,action){
          const{sign,amount,id,price} = action.payload;
          let cartItems = [...state.cart]; // copy it to prevent mutatin the state
           
          // map through the array and update the requiured values
            cartItems = cartItems.map((cartItem:item)=>{
               if(cartItem.id===id && sign==='+') 
               return {  ...cartItem, amount:cartItem.amount + amount , price:cartItem.price + (price / cartItem.amount)   }
               
               if(cartItem.id===id && sign==='-') 
               return {  ...cartItem,amount:cartItem.amount - amount , price:cartItem.price - (price / cartItem.amount)   }

               return cartItem
           });

         return{
            ...state,cart:cartItems
         }
      }
  
   },
   extraReducers:(builder)=>{
      builder
      .addCase(fetchData.pending,(state)=>{
            state.status='pending'
      })
      .addCase(fetchData.fulfilled,(state:cartProps,action)=>{
          if(Array.isArray(action.payload)){
           const modfiedItem = (action.payload).map((item:item)=>{
               item.amount = 0;
               return item;
           })
           state.items = modfiedItem;
           state.searchItems=modfiedItem;
           state.status='fetched'
         }
      })
      .addCase(fetchData.rejected,(state,action)=>{
           state.status='rejected';
           state.error= action.error.message;

      })
      .addCase(fetchItem.pending,(state)=>{
            state.singleItemState='pending'
      })
      .addCase(fetchItem.fulfilled,(state,action)=>{
             const item  = {...action.payload};
             item.amount=0
            
             state.singleItem=item;
             state.singleItemState='fetched'

      })
      .addCase(fetchItem.rejected,(state,action)=>{
             state.singleItemState='rejected';
             state.singleItemError=action.error.message
      })
   }
})


export const{setType,searchItem,reset,addCart,removeItem,cartRefreshOnToggle,
             emptyCart,calculateTotal,updateInCart,checkout} =CartSlice.actions

export default CartSlice.reducer