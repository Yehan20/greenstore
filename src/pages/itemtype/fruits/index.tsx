import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { pageVariantAll, someProductVarient } from '../../../animations/varients';
import Products from '../../../components/products/products';
import Serach from '../../../components/search/search'
import { getItemsType } from '../../../custom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reset } from '../../../reducers/cartSlice';
import { FruitItemStyled, ProductsContainerStyled } from '../../../styled/allitems.style';

const Fruits = () => {
    let {searchItems } = useAppSelector((state) => state.Cart);
    const dispatch = useAppDispatch();
    const FruitItemVarient = motion(FruitItemStyled) 
    let shuffledProducts = getItemsType(searchItems,'Fruit')

    useEffect(()=>{
      dispatch(reset())
   },[])

  return (
     <motion.div variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit'>
      <Serach/>
      <FruitItemVarient variants={someProductVarient}>
       <h2>Fruits</h2>
      <ProductsContainerStyled>
         <Products productItems={shuffledProducts}/>
      </ProductsContainerStyled>
      </FruitItemVarient>
     </motion.div>
  )
}

export default Fruits