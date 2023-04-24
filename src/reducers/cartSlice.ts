import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { getItemsType } from '../custom';
import { cartProps,item } from '../types/types';


const inital:cartProps = {
    items:[],
    searchItems:[],
    cart:[],
    singleItem:{ id:0, Name: '', price: 0, ext: '',src: '', amount:0, type:''},
    singleItemState:'idle',
    singleItemError:'',
    totalPrice:0,
    totalAmount:0,
    status:'idle',
    error:'',
    filterType:'all',
    
}

export const fetchData= createAsyncThunk('items/getItems',async()=>{
   //url='http://localhost:3001/items/ https://fruit-vegi-list-api.cyclic.app/items
     try{
        const response = await axios.get('http://localhost:3001/items/');
   
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
       const response  =await axios.get('http://localhost:3001/items/'+ext)
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
         const {singleItem,amount}= action.payload;
         const modifiedItem={
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
               ...state,cart:[...updatedCart]
            }  
        }
        
        // if no match return the existing items , with the modified item
         return {
            ...state,cart:[...updatedCart,modifiedItem]
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
     emptyCart(state){
         return {
         ...state,cart:[]
         }
      },
      removeItem(state,action){
        const id = action.payload;
        let cartItems = [...state.cart].filter(cartItem=>cartItem.id!==id);
        return {
         ...state,cart:cartItems
       }
        
      },
      reset(state){
         //state.searchItems=state.items
         return {
            ...state,searchItems:state.items
         }
      }
      ,
      searchItem(state,action){

          let filterByType =getItemsType([...state.items],state.filterType);

          const regex = new RegExp(action.payload, 'i');
          filterByType= filterByType.filter((item) => regex.test(item.Name));

          state.searchItems=filterByType;       
      },

      setType(state,action){
         state.filterType=action.payload;
      },

 

      updateInCart(state,action){
          const{sign,amount,id,price} = action.payload;
          let cartItems = [...state.cart];
           
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

export const geTotal=(state:any)=>state.Cart.total;

export const{setType,searchItem,reset,addCart,removeItem,
             emptyCart,calculateTotal,updateInCart} =CartSlice.actions

export default CartSlice.reducer