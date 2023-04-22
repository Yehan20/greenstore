import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { pageVariantAll } from '../../../animations/varients';
import Products from '../../../components/products/products';
import Serach from '../../../components/search/search'
import { getItemsType } from '../../../custom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reset } from '../../../reducers/cartSlice';
import { FruitItemStyled, ProductsContainerStyled } from '../../../styled/allitems.style';

const Fruits = () => {
    let {searchItems } = useAppSelector((state) => state.Cart);
    const dispatch = useAppDispatch();
   //  const FruitItemVarient = motion(FruitItemStyled) 
    let shuffledProducts = getItemsType(searchItems,'Fruit')

    useEffect(()=>{
      dispatch(reset())
   },[])

  return (
     <>
      <Serach/>
      <FruitItemStyled>
       <h2>Fruits</h2>
      <ProductsContainerStyled>
         <Products productItems={shuffledProducts}/>
      </ProductsContainerStyled>
      </FruitItemStyled>
     </>
  )
}

export default Fruits