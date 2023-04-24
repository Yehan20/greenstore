import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { HiShoppingBag } from 'react-icons/hi'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addCart, calculateTotal, fetchItem } from '../../reducers/cartSlice';
import Loader from '../loader/loader';


enum LoadingStatus  {
  loading="pending",
  success="fetched",
  error="rejected",
}

const Product:React.FC=() => {

  

    const [amount,setAmount]=useState(1);
    // adding to cart
    const{singleItem,singleItemState} = useAppSelector(state=>state.Cart)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchItem(id as string))
        window.scrollTo(0,0)
    }, [])
    
    
    const handleClick = ()=>{
      dispatch(addCart({singleItem,amount}))
      dispatch(calculateTotal())
    }

    if (singleItemState === LoadingStatus.loading) {
      return <Loader />
    }
  
    if (singleItemState===LoadingStatus.error){
       return <div><p>Failed to Fetch</p></div>
    }
  
  
  return (
    <>
       <div>
           <img  src={`http://${singleItem.src}`} alt={singleItem.Name} />
           </div>
           <div>
                <h3>{singleItem.Name}</h3>
                <p><span>Rs: {singleItem.price}</span> <span>Total Price {(singleItem.price as number)*amount}</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem veniam corporis, minima quam magni dolor, beatae, quis omnis ad recusandae architecto non aspernatur unde tenetur iusto harum animi maiores.</p>
                <div>
                   <button disabled={amount<=1?true:false} aria-label="Decrease quantity Amount"   onClick={()=>setAmount(amount-1)}><AiOutlineMinus/></button>
                   <input min={1} type="number"  title='Decrease' onChange={(e)=>setAmount(parseInt(e.target.value))} value={amount} />
                   <button aria-label="Increase" title='Increase Amount' onClick={()=>setAmount(amount+1)}><AiOutlinePlus/></button>
                   <div>
                      <button onClick={handleClick}>Add to basket <HiShoppingBag/></button>
                   </div>
                </div>
                <p>Category: <b>{singleItem.type}</b></p>
           </div>
    </>
  )
}

export default Product