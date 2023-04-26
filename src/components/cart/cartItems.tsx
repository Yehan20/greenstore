
import { AiOutlineMinus, AiOutlinePlus,AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { updateInCart,calculateTotal,removeItem, emptyCart, checkout } from '../../reducers/cartSlice'
import { CartBodyStyled, CartFooterStyled } from '../../styled/header.styled'
import { item } from '../../types/types'
import CartStatus from './cartStatus'


const CartItems = () => {
    const dispatch = useAppDispatch();
    const {cart,totalPrice} = useAppSelector((state) => state.Cart);

    const handleCartChange=(id:number,sign:string,price:number,amount:number)=>{
         dispatch(updateInCart({id,sign,price,amount}));
         dispatch(calculateTotal());
    }
    const handleCartDelete = (id:number)=>{
    
        dispatch(removeItem(id));
        dispatch(calculateTotal());
    }
    return (
        <>
            <CartBodyStyled>
                <CartStatus/>
                {cart.map((cartItem: item) => {
                    const { id, Name, amount, price, src, } = cartItem
                    return <article key={id}>
                        <div>
                            <button title='Click to delete' onClick={()=>handleCartDelete(id)}><AiOutlineCloseCircle size={'18px'}/></button>
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
            {cart.length>0 &&<CartFooterStyled>
                {cart.length>0&&<button onClick={() => dispatch(emptyCart())}>Clear Cart</button>}
                {cart.length>0&&<button onClick={()=>dispatch(checkout())} id='checkout'>Checkout</button>}
            </CartFooterStyled>}
        </>

    )
}

export default CartItems