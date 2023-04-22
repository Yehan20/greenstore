import React from 'react'
import { SideBarStyled } from '../styled/allitems.style'
import { FaCarrot, FaAppleAlt, FaShoppingBasket  } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setType } from '../reducers/cartSlice';

enum itemType{
   all='all',
   veg='Vegetables',
   fruits='Fruit',
}

const SideBar = () => {
  const itemTypes = useAppSelector((state)=>state.Cart.filterType)
  const dispatch = useAppDispatch();

  const changeType=(type:string)=>{
        dispatch(setType(type))
  }
  return (
        <SideBarStyled>
            <h3>Filter by Categories</h3>
            <div>
                <button className={`${itemTypes===itemType.all?'Active':''}`} onClick={()=>changeType(itemType.all)}>< FaShoppingBasket/> All Types</button>
                <button className={`${itemTypes===itemType.veg?'Active':''}`} onClick={()=>changeType(itemType.veg)}> <FaCarrot /> Vegetables</button>
                <button className={`${itemTypes===itemType.fruits?'Active':''}`} onClick={()=>changeType(itemType.fruits)}><FaAppleAlt/> Fruits</button>
            </div>
        </SideBarStyled>
  )
}

export default SideBar