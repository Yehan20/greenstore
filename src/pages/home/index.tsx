import React from 'react'
import MegaMenu from '../megaMenu'
import SomeProducts from '../../components/someProducts/someProducts'
import SpecialItems from '../specialitems'
import { motion } from 'framer-motion'

const Home = () => {
  
  return (
    <>
      <MegaMenu/>
      <SomeProducts/>
      <SpecialItems/>
    </>
  )
}

export default Home