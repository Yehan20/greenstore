
import AllProducts from '../allProducts'
import SideBar from '../sidebar'
import AllItemStyled from '../../styled/allitems.style'

import SomeProducts from '../../components/someProducts/someProducts'
import Serach from '../../components/search/search'
import { customVarient, pageVariantAll } from '../../animations/varients'
import { motion } from 'framer-motion'


const All = () => {
  const AllItemVariant = motion(AllItemStyled);
  return (
    <motion.div variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit'>
      <Serach/>
      <AllItemVariant variants={customVarient}>
        <h2>Our Products</h2>
        <SideBar />
        <AllProducts />
      </AllItemVariant>
      <SomeProducts/>
    </motion.div>



  )
}

export default All