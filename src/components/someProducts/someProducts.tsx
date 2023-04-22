
import { useAppSelector } from '../../hooks/hooks'

import SomeProductsStyled, { SomeProductFruitStyled, SomeProductStyled, SomeProductVegStyled } from '../../styled/someProducts.styled'

import { someProductProps} from '../../types/types'



import berry from '../../resources/images/berry.jpg'
import leaf from '../../resources/images/leaf.jpg'

import { getCustomItems } from '../../custom'
import Loader from '../loader/loader'
import { motion } from 'framer-motion'
import { someProductChildVarient, someProductVarient } from '../../animations/varients'
import Products from '../products/products'

let content:JSX.Element;

const SomeProducts = () => {  
  
  // enum for loading status
  enum LoadingStatus  {
        loading="pending",
        success="fetched",
        error="rejected",
  }
 
 // custom hooks defined to prevent giving types
  const items = getCustomItems(useAppSelector(state=>state.Cart.items));  
  const status = useAppSelector(state=>state.Cart.status)

  

  // track the loading and item Progress
  status===LoadingStatus.loading?content=<div style={{display:'flex',justifyContent:'center'}}><Loader/></div>:
  status===LoadingStatus.success?content=<SomeProduct productItems={items}/>:
  status===LoadingStatus.error?content=<div>Failed to Fetch</div>:''

  
  return (
    <SomeProductsStyled>
          <h2>Best Selling Products</h2>
          {content}
    </SomeProductsStyled>
  )
}


// Componnent 
const SomeProduct=({productItems}:someProductProps)=>{
     const SomeProductMotion= motion(SomeProductStyled);
     const SomeProductVegMotion= motion(SomeProductVegStyled);
     const SomeProductFruitMotion= motion(SomeProductFruitStyled);



     return (
        <SomeProductMotion variants={someProductVarient} initial="hidden" animate='visible'>
            <SomeProductVegMotion variants={someProductChildVarient}>
               <img src={leaf} alt="Veg" />
               <p>50% Off  over 2kgs</p>
               <h3>Organice Vegetables</h3>
            </SomeProductVegMotion>

            
            <SomeProductFruitMotion variants={someProductChildVarient}>
               <img src={berry} alt="Fru" />
               <p>40% Off  over 2kgs</p>
               <h3>Organice Fruits</h3>
          </SomeProductFruitMotion>

               <Products productItems={productItems}/>
                {/* {productItems.map((productItem)=>{
                        const {id,src,Name,price,type} = productItem
                        let URL =src
                        return <motion.article variants={someProductChildVarient} key={id} id={type}>
                            <img src={`http://${URL}`} alt={Name} />
                            <div>
                            <h3>{Name}</h3>
                            <p>RS.<span>{price}</span></p>
                            <div style={{padding:0}}>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                            </div>
                            </div>
                        </motion.article>
                })} */}


        </SomeProductMotion>
     )
}

export default SomeProducts