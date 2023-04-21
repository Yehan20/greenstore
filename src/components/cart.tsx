import React, { useRef } from 'react'
import { CartBodyStyled, CartFooterStyled, CartOverlayStyled, CartStyled, CartTopStyled } from '../styled/header.styled'
import { FaTimes } from 'react-icons/fa';
import { CartProps } from '../types/types';
import { AnimatePresence, motion } from 'framer-motion';

const Cart:React.FC<CartProps> =({setShowCart,showCart}) => {

  const parentRef = useRef<HTMLDivElement|null>(null) 
  const toggleCart = (e:React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>)=>{

      if(!(parentRef.current===(e.target as Node))){
        return;
      }
      setShowCart(!showCart)
  } 

  const CartOverLayMotion = motion(CartOverlayStyled)
  const CartMotion = motion(CartStyled)

  const CartOverLayVarient= {
      hidden:{
        x:'100vw',
        opacity:0
      },
      visible:{
        transition:{
          type:'tween',
          when:'beforeChildren',
          staggerChildren:0.5
        },
        x:0,
        opacity:1,
      },
      leave:{
        x:'100vw',
        transition:{
            type:'tween',
            delay:0.5
        }    
      }
   }

   const CartVarient = {
      hidden:{
         x:'100vw'
      }
      ,
      visible:{
          x:0,
          transition:{
            type:'tween',
            when:'beforeChildren',
            ease:'linear', 
            duration:0.5
          }
      },
      leave:{
        x:'100vw',
        opacity:0,
        transition:{
            type:'tween',
            duration:1,
        }
        
      }
   }

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