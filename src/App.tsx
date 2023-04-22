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
            <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home/>}/>
              <Route path="/all" element={<All/>}/> 
              <Route path="/fruits" element={<Fruits/>}/>
              <Route path="/vegetables" element={<Vegetables/>}/>
            </Routes>
            </AnimatePresence>
            </main>
          <Footer/>
        </ThemeProvider>
 
    </>
  )
}

export default App
