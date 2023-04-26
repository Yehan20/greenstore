import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { GiShoppingBag } from 'react-icons/gi';
import { shoppingVarient } from '../../animations/varients';
import { useAppSelector } from '../../hooks/hooks';

const CartToggle = () => {
    
  const cartItemAmount = useAppSelector((state)=>state.Cart.cart);
  const [mount,setMount] = useState(false)
  const control = useAnimation()
  
  // cart shaking effect
   useEffect(()=>{
    if(mount){
     control.start(shoppingVarient.animate)
      setTimeout(()=>{
         control.stop()
      },1000)
    }
    setMount(true)
   },[cartItemAmount])




  return (
    <div className='toggle-container' style={{overflow:'hidden',position:"relative"}}>
    <motion.div   variants={shoppingVarient} initial='hidden' animate={control}>
     <GiShoppingBag  color='rgb(117, 162, 57)' size={"40px"}/></motion.div>
     <span className=''>{cartItemAmount.length?cartItemAmount.length:''}</span>  
    </div>
  
  )
}

export default CartToggle