import React from 'react'
import Header from '../components/header'
import MegaMenu from '../components/megaMenu'
import SomeProducts from '../components/someProducts'
import SpecialItems from '../components/specialitems'

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