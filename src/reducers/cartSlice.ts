import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useAppSelector } from '../hooks/hooks';
import { cartProps,item } from '../types/types';


const inital:cartProps = {
    items:[],
    cart:[],
    total:100,
    totalAmount:0,
    status:'idle',
    error:'',
    
}

export const fetchData= createAsyncThunk('items/getItems',async()=>{
   //url='http://localhost:3001/items/ https://fruit-vegi-list-api.cyclic.app/items
     try{
        const response = await axios.get('http://localhost:3001/items/');
   
        return [...response.data]
     }catch(error:unknown){
        if(error instanceof Error)  return error.message
     }

})


const CartSlice =createSlice({
   name:"Cart",
   initialState:inital,
   reducers:{
      getCustomItems(state,action){
          
      },
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
           state.status='fetched'
         }
      })
      .addCase(fetchData.rejected,(state,action)=>{
           state.status='rejected';
           state.error= action.error.message;
      })
   }
})

export const geTotal=(state:any)=>state.Cart.total;
// export const getItems = useAppSelector(state=>state.Cart.items);
export default CartSlice.reducer