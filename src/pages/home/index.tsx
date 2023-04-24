import React from 'react'
import MegaMenu from '../megaMenu'
import SomeProducts from '../../components/someProducts/someProducts'
import SpecialItems from '../specialitems'
import { motion } from 'framer-motion'
import { pageVariant } from '../../animations/varients'

const Home = () => {
  //variants={pageVariantAll} initial='hidden' animate='visible'  exit='exit'
  return (
    <motion.div variants={pageVariant} initial='hidden' animate='visible' exit='exit'>
      <MegaMenu/>
      <SomeProducts/>
      <SpecialItems/>
    </motion.div>
  )
}

export default Home