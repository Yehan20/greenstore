import React, { useRef, useState } from 'react'
import { CartBodyStyled, CartFooterStyled, CartOverlayStyled, CartStyled, CartTopStyled, EmptyStyled } from '../../styled/header.styled'
import { FaTimes } from 'react-icons/fa';
import { CartProps, item } from '../../types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { CartOverLayVarient, CartVarient } from '../../animations/varients';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { emptyCart } from '../../reducers/cartSlice';
import CartItems from './cartItems';

const Cart: React.FC<CartProps> = ({ setShowCart, showCart }) => {

  const parentRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch();
  const toggleCart = (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
    // if we click some where else of the cart
    if (!(parentRef.current === (e.target as Node))) {
      return;
    }
    setShowCart(!showCart)
  }

  
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
{/* 
            <CartBodyStyled>
              {cart.length<=0 && <EmptyStyled><GiShoppingBag size={'200px'} color='rgb(117, 162, 57)'/><p>Bag is Empty</p></EmptyStyled>}
              {cart.map((cartItem: item) => {
                const { id, Name,  amount, price, src, type, } = cartItem
                return <article key={id}>
                  <div>
                    <img src={`http://${src}`} alt={Name} />
                  </div>
                  <div>
                    <h3>{Name}</h3>
                    <p><span>Rs: {price}</span></p>
                    <div>
                      <button disabled={Number(amount)<= 1 ? true : false} aria-label="Decrease quantity Amount" ><AiOutlineMinus /></button>
                       <span>{amount}</span>
                      <button  aria-label="Increase" title='Increase Amount'><AiOutlinePlus /></button>
                    </div>
                  </div>
                </article>
              })}
            </CartBodyStyled> */}
            <CartItems/>
            <CartFooterStyled>
                <button onClick={() => dispatch(emptyCart())}>Clear Cart</button>
                <button id='checkout'>Checkout</button>
            </CartFooterStyled>

          </CartMotion>
        </CartOverLayMotion>
      }
    </AnimatePresence>

  )
}

export default Cart