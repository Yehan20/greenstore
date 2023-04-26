import {Routes,Route, useLocation} from 'react-router-dom'

import { useEffect } from "react"
import { useAppDispatch } from "./hooks/hooks"
import { fetchData } from "./reducers/cartSlice"

import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styled/global.styled"

import Footer from "./components/footer/footer"
import Header from "./components/header/header"

import All from "./pages/all/"
import Fruits from "./pages/itemtype/fruits"
import Vegetables from "./pages/itemtype/vegetables"
import Home from "./pages/home"
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import Item from './pages/itemtype/singleItem'
import Error from './pages/error'



const Colors={
    green:'#75A239',
    dark:'#111',
    grey:'#f9f9f9 ',
    textClr:'#222'  ,
    HeadingFont:`Montserrat,${'sans-serif'}`,    
    ParaFont:`Poppins, ${'sans-serif'}`,
    ExtraFont:`Oswald, ${'sans-serif'}`
}

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation()

  // first mounted get the data from our api 
   useEffect(()=>{
        console.log('use effect ran')
        dispatch(fetchData());
   },[])   
    const {scrollYProgress} = useScroll()
   
  return (
    <>
        <ThemeProvider theme={Colors}>
          <GlobalStyles/>
          <Header/>
          <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar"></motion.div>
            <main>
            <AnimatePresence>
            <Routes location={location} key={location.key||location.pathname}>
              <Route  path="/" element={<Home/>}/>
              <Route  path="/all" element={<All/>}/> 
              <Route  path="/fruits" element={<Fruits/>}/>
              <Route  path="/vegetables" element={<Vegetables/>}/>
              <Route  path="/item/:id" element={<Item/>}/>
              <Route  path="*" element={<Error/>}/>
            </Routes>
            </AnimatePresence>
            </main>
          <Footer/>
        </ThemeProvider>
 
    </>
  )
}

export default App
