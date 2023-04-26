import { SingleProductStyled } from '../../../styled/allitems.style'
import {  motion } from 'framer-motion'
import { pageVariantAll} from '../../../animations/varients'
import Product from '../../../components/products/product'



const Item = () => {

   const SingleProductMotion = motion(SingleProductStyled)

    return (  
    
         <SingleProductMotion variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit' >
         <Product/>
        </SingleProductMotion>
           
    )
}

export default Item

