import React, { useRef } from 'react'
import { CartOverlayStyled, CartStyled, CartTopStyled, EmptyStyled } from '../../styled/header.styled'
import { FaTimes } from 'react-icons/fa';
import { CartProps, item } from '../../types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { CartOverLayVarient, CartVarient } from '../../animations/varients';
import { useAppDispatch } from '../../hooks/hooks';

import CartItems from './cartItems';

const Cart: React.FC<CartProps> = ({ setShowCart, showCart }) => {

  const parentRef = useRef<HTMLDivElement | null>(null)

   const toggleCart = (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
    // if we click some where else of the cart
    if (!(parentRef.current === (e.target as Node))) {
      return;
    }
    setShowCart(!showCart)
  }

  // to animate style components
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
              <button onClick={() => setShowCart(!showCart)}>
                <FaTimes fontSize={"20px"} />
              </button>
            </CartTopStyled>

            <CartItems />

          </CartMotion>

        </CartOverLayMotion>
      }
    </AnimatePresence>

  )
}

export default Cart