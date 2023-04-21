import React from 'react'
import { Link } from 'react-router-dom'
import SpecialItemStyled, { MiniCardStyled, PremireProductStyled, SpecialItemstyled } from '../styled/speacialItem.styled'
import { FaCarrot, FaApple,FaLock } from 'react-icons/fa';
import { IoIosLeaf} from 'react-icons/io';
import { GiCarrot ,GiBroccoli} from 'react-icons/gi';
import cherry from '../resources/images/cherry.jpg'
import corn from '../resources/images/corn.jpg'
import graphes from '../resources/images/graphes2.jpg'

const SpecialItems = () => {
  return (
    <SpecialItemStyled>
        <PremireProductStyled>
             <h3>Trust Our Resources</h3>
             <p>We Are Online Market Of Organic Food</p>
             <article>
               <div>
                  <MiniCardStyled>
                    <FaCarrot color='green' size={'50px'}/>
                    <p>Always Fresh</p>
                  </MiniCardStyled>
                  <MiniCardStyled>
                    <FaApple color='green' size={'50px'}/>
                    <p>Always Fresh</p>
                  </MiniCardStyled>
                  <MiniCardStyled>
                    <FaLock color='green' size={'50px'}/>
                    <p>Always Fresh</p>
                  </MiniCardStyled>
                  
               </div>
               <img src={cherry} alt="Cherry" />
               <div>
               <MiniCardStyled>
                    <p>Always Fresh</p>
                    <IoIosLeaf color='green' size={'50px'}/>
                  </MiniCardStyled>
                  <MiniCardStyled>
                  <p>Always Fresh</p>
                    <GiCarrot color='green' size={'50px'}/>
                    
                  </MiniCardStyled>
                  <MiniCardStyled>
                  <p>Always Fresh</p>
                    <GiBroccoli color='green' size={'50px'}/>
                  
                  </MiniCardStyled>
               </div>
             </article>
        </PremireProductStyled>
        <SpecialItemstyled>
            <img src={graphes} alt='graphes'/>
             <h3>Fruites</h3>
             <p>
                Extra 40% off
             </p>
             <Link to='/fruits' title='Click to visit'>Show Now</Link>
        </SpecialItemstyled>  

        <SpecialItemstyled>
           <img src={corn} alt='corn'/>
                <h3>Vegetables</h3>
                    <p>
                    Organic for you! upto 50% Off
                    </p>
                  <Link to='/fruits' title='Click to visit'>Show Now</Link>
        </SpecialItemstyled>
    </SpecialItemStyled>
  )
}

export default SpecialItems