
import AllProducts from '../allProducts'
import SideBar from '../sidebar'
import AllItemStyled from '../../styled/allitems.style'


import {pageVariantAll } from '../../animations/varients'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { reset } from '../../reducers/cartSlice'
import { useAppDispatch } from '../../hooks/hooks'


const All = () => {
  const AllItemVariant = motion(AllItemStyled);
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(reset())
 },[])
  return (
    <motion.div variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit'>
      {/* <Serach/> */}
      <AllItemStyled>
        <h2>Our Products</h2>
        <SideBar />
        <AllProducts />
      </AllItemStyled>
      {/* <SomeProducts/> */}
    </motion.div>



  )
}

export default All