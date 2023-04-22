import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { pageVariantAll } from '../../../animations/varients';
import Products from '../../../components/products/products';
import Serach from '../../../components/search/search';
import { getItemsType } from '../../../custom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reset } from '../../../reducers/cartSlice';
import { FruitItemStyled, ProductsContainerStyled, VegItemStyled } from '../../../styled/allitems.style';

const Vegetables = () => {
    const {searchItems} = useAppSelector((state) => state.Cart);
    const dispatch = useAppDispatch();

//    const VegItemVariant = motion(VegItemStyled);

    let shuffledProducts = getItemsType(searchItems,'Vegetables')
    useEffect(()=>{
         dispatch(reset())
    },[])
    
  return (
     <>
      <Serach/>
      <VegItemStyled>
      <h2>Vegetales</h2>
      <ProductsContainerStyled>
         <Products productItems={shuffledProducts}/>
      </ProductsContainerStyled>
      </VegItemStyled>
     </>
  )
}

export default Vegetables