import React, { useRef } from 'react'
import { CartBodyStyled, CartFooterStyled, CartOverlayStyled, CartStyled, CartTopStyled } from '../../styled/header.styled'
import { FaTimes } from 'react-icons/fa';
import { CartProps } from '../../types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { CartOverLayVarient, CartVarient } from '../../animations/varients';

const Cart:React.FC<CartProps> =({setShowCart,showCart}) => {

  const parentRef = useRef<HTMLDivElement|null>(null) 
  
  const toggleCart = (e:React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>)=>{   
      // if we click some where else of the cart
      if(!(parentRef.current===(e.target as Node))){
        return;
      }
      setShowCart(!showCart)
  } 
  
  // to add the motion components
  const CartOverLayMotion = motion(CartOverlayStyled)
  const CartMotion = motion(CartStyled)


  return (
    <AnimatePresence>
        {showCart &&   
        <CartOverLayMotion 
        variants={CartOverLayVarient}
        initial='hidden'
        animate='visible'
        exit='leave'
        onClick={toggleCart} ref={parentRef}>
               <CartMotion variants={CartVarient} >
                  <CartTopStyled >
                   <h3>Cart</h3>
                   <button onClick={()=>setShowCart(!showCart)}>
                       <FaTimes fontSize={"20px"}/>
                   </button>
                   </CartTopStyled> 
   
                   <CartBodyStyled>
   
                   </CartBodyStyled>
   
                   <CartFooterStyled>
                       <button>Clear Cart</button>
                       <button id='checkout'>Checkout</button>
                   </CartFooterStyled>
               </CartMotion>
         </CartOverLayMotion>
        }
    </AnimatePresence>

  )
}

export default Cart