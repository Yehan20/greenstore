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
import { AnimatePresence } from 'framer-motion'
import Item from './pages/itemtype/singleItem'



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
   useEffect(()=>{
        console.log('use effect ran')
        dispatch(fetchData());
   },[])
   
  return (
    <>
        <ThemeProvider theme={Colors}>
          <GlobalStyles/>
          <Header/>
            <main>
            <AnimatePresence >
            <Routes location={location} key={location.key||location.pathname}>
              <Route  path="/" element={<Home/>}/>
              <Route  path="/all" element={<All/>}/> 
              <Route  path="/fruits" element={<Fruits/>}/>
              <Route  path="/vegetables" element={<Vegetables/>}/>
              <Route  path="/item/:id" element={<Item/>}/>
            </Routes>
            </AnimatePresence>
            </main>
          <Footer/>
        </ThemeProvider>
 
    </>
  )
}

export default App
