import React from 'react'
import { AiOutlineMinus, AiOutlinePlus,AiOutlineDelete } from 'react-icons/ai'
import { GiShoppingBag } from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { updateInCart,calculateTotal,removeItem } from '../../reducers/cartSlice'
import { CartBodyStyled, CartFooterStyled, EmptyStyled } from '../../styled/header.styled'
import { item } from '../../types/types'


const CartItems = () => {
    const dispatch = useAppDispatch();
    const {cart,totalPrice} = useAppSelector((state) => state.Cart);

    const handleCartChange=(id:number,sign:string,price:number,amount:number)=>{
         dispatch(updateInCart({id,sign,price,amount}));
         dispatch(calculateTotal());
    }
    const handleCartDelete = (id:number)=>{
        console.log('click');
        dispatch(removeItem(id));
        dispatch(calculateTotal());
    }
    return (
        <>
            <CartBodyStyled>
                {cart.length <= 0 && <EmptyStyled><GiShoppingBag size={'200px'} color='rgb(117, 162, 57)' /><p>Bag is Empty</p></EmptyStyled>}
                {cart.map((cartItem: item) => {
                    const { id, Name, amount, price, src, type, } = cartItem
                    return <article key={id}>
                        <div>
                            <button onClick={()=>handleCartDelete(id)}><AiOutlineDelete size={'18px'}/></button>
                            <img src={`http://${src}`} alt={Name} />
                        </div>
                        <div>
                            <h3>{Name}</h3>
                            <p><span>Rs: {price}</span></p>
                            <div>
                                <button  onClick={()=>handleCartChange(id,'-',price,1)}   disabled={Number(amount) <= 1 ? true : false} aria-label="Decrease quantity Amount" ><AiOutlineMinus /></button>
                                <span>{amount}</span>
                                <button  onClick={()=>handleCartChange(id,'+',price,1)} aria-label="Increase" title='Increase Amount'><AiOutlinePlus /></button>
                            </div>
                        </div>
                    </article>
                })}
            </CartBodyStyled>
            <CartFooterStyled>
               <p><span>Sub Total</span> <span>RS:{totalPrice}</span></p>
            </CartFooterStyled>
        </>

    )
}

export default CartItems