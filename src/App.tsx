
import { ThemeProvider } from "styled-components"
import Header from "./components/header"
import GlobalStyles from "./styled/global.styled"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import Footer from "./components/footer"
import { useEffect } from "react"
import store from "./store/store"
import { Provider } from "react-redux"
import { useAppDispatch } from "./hooks/hooks"
import { fetchData } from "./reducers/cartSlice"
import Test from "./pages/test"
fetchData


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
   useEffect(()=>{
        console.log('use effect ran')
        dispatch(fetchData());
   },[])

  return (
    <>

      <Router>
        <ThemeProvider theme={Colors}>
          <GlobalStyles/>
          <Header/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/test" element={<Test/>}/> 
          </Routes>
          <Footer/>
        </ThemeProvider>
        </Router>
 
    </>
  )
}

export default App
