import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { pageVariantAll, } from '../../../animations/varients';
import Products from '../../../components/products/products';
import Serach from '../../../components/search/search'
import { getItemsType } from '../../../custom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reset } from '../../../reducers/cartSlice';
import { FruitItemStyled, ProductsContainerStyled } from '../../../styled/allitems.style';

const Fruits = () => {
    let searchItems  = useAppSelector((state) => state.Cart.searchItems);
    const dispatch = useAppDispatch();
    

    let shuffledProducts = getItemsType(searchItems,'Fruit')
    
    // each componet is mounted need to run 
    useEffect(()=>{
      dispatch(reset())
   },[])

  return (
     <motion.div variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit'>
      <Serach/>
      <FruitItemStyled>
       <h2>Fruits</h2>
      <ProductsContainerStyled>
         <Products productItems={shuffledProducts}/>
      </ProductsContainerStyled>
      </FruitItemStyled>
     </motion.div>
  )
}

export default Fruits