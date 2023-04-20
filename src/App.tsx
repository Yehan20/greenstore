
import { ThemeProvider } from "styled-components"
import Header from "./components/header"
import GlobalStyles from "./styled/global.styled"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import Footer from "./components/footer"


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


  return (
    <>
      <Router>
      <ThemeProvider theme={Colors}>
        <GlobalStyles/>
        <Header/>
        <Home/>
        <Footer/>
      </ThemeProvider>
      </Router>
    </>
  )
}

export default App
