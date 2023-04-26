import {  motion } from 'framer-motion';
import {  getItemsType, } from '../custom';
import { useAppSelector } from '../hooks/hooks'
import { ProductsContainerStyled } from '../styled/allitems.style';
import Products from '../components/products/products';
import { customVarient } from '../animations/varients';


const AllProducts = () => {
  
  // get the items from the store
  const {searchItems, filterType } = useAppSelector((state) => state.Cart);

  let shuffledProducts = [...searchItems].sort(() => Math.random() - 0.5); // i need to sort them without mutating the error
  
  const ProductsContainerMotion = motion(ProductsContainerStyled);

  shuffledProducts=getItemsType(shuffledProducts,filterType) // after user clicks a type from the products filter it

  return (

      <ProductsContainerMotion variants={customVarient} >
        {shuffledProducts.length>0?<Products productItems={shuffledProducts}/>:<h4>Not Matching Items</h4>}
      </ProductsContainerMotion>
   

  )
}

export default AllProducts