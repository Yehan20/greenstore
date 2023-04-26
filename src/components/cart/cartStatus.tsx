
import { GiShoppingBag } from 'react-icons/gi'
import {FiTruck} from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cartRefreshOnToggle } from '../../reducers/cartSlice';
import { EmptyStyled } from '../../styled/header.styled'

const CartStatus = () => {

   const color = useAppSelector((state) => state.Cart.toastMessage.color);
   const summary = useAppSelector((state) => state.Cart.summary);
   const dispatch = useAppDispatch();

   if(color==='default'|| color==='warning'){
    return <EmptyStyled>
        <GiShoppingBag size={'150px'} color='rgb(117, 162, 57)' /><p>Cart  is Empty Order Something</p>
    </EmptyStyled>
   }

   if(color==='error' || color==='success'){
     return <></>
   }
  return (
    <EmptyStyled>
    <FiTruck size={'140px'} color='rgb(117, 162, 57)' />
    <h3>Thanks your Order will be delivered</h3>
     <p>Your Order Summary </p>

     <div>
     <table>
        <thead>
           <tr>
             <td>Name</td>
             <td></td>
             <td>Amount</td>
             <td>Price</td>
           </tr>
        </thead>
        <tbody>
          {summary.map((item)=>{
             return <tr key={item.id}>
                <td>{item.Name}</td>
                <td><img src={`http://${item.src}`} alt={item.Name} /></td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
             </tr>
          })}
        </tbody>
     </table>
     </div>
  
     <button onClick={()=>dispatch(cartRefreshOnToggle())}>Order Again</button>
    </EmptyStyled>
  )
}

export default CartStatus