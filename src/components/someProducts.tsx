
import { useAppSelector } from '../hooks/hooks'

import SomeProductsStyled, { SomeProductFruitStyled, SomeProductStyled, SomeProductVegStyled } from '../styled/someProducts.styled'

import { someProductProps} from '../types/types'

import {FaStar} from 'react-icons/fa'

import berry from '../resources/images/berry.jpg'
import leaf from '../resources/images/leaf.jpg'

import { getCustomItems } from '../custom'
import Loader from './loader'

let content:JSX.Element;

const SomeProducts = () => {  
  
  // enum for loading statuds
  enum LoadingStatus  {
        loading="pending",
        success="fetched",
  }
 
 // custom hooks defined to prevent giving types
  const items = getCustomItems(useAppSelector(state=>state.Cart.items));  
  const status = useAppSelector(state=>state.Cart.status)

  

  // track the loading and item Progress
  status===LoadingStatus.loading?content=<div style={{display:'flex',justifyContent:'center'}}><Loader/></div>:
  status===LoadingStatus.success?content=<SomeProduct productItems={items}/>:
  <div>Error</div>

  
  return (
    <SomeProductsStyled>
          <h2>Products</h2>
          {content}
    </SomeProductsStyled>
  )
}


// Componnent 
const SomeProduct=({productItems}:someProductProps)=>{

     return (
        <SomeProductStyled>
            <SomeProductVegStyled>
               <img src={leaf} alt="Veg" />
               <p>50% Off  over 2kgs</p>
               <h3>Organice Vegetables</h3>
            </SomeProductVegStyled>

                {productItems.map((productItem)=>{
                        const {id,src,Name,price,type} = productItem
                        let URL =src
                        return <article key={id} id={type}>
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
                        </article>
                })}

            <SomeProductFruitStyled>
               <img src={berry} alt="Fru" />
               <p>40% Off  over 2kgs</p>
               <h3>Organice Fruits</h3>
          </SomeProductFruitStyled>

        </SomeProductStyled>
     )
}

export default SomeProducts