
import { ThemeProvider } from "styled-components"
import Header from "./components/header"
import GlobalStyles from "./styled/global.styled"
import {BrowserRouter as Router} from 'react-router-dom'


const Colors={
    green:'#75A239',
    dark:'#111',
    grey:'#f9f9f9 ',
    textClr:'#222'  ,
    HeadingFont:`Montserrat, ${'sans-serif'}`,    
    ParaFont:`Poppins', ${'sans-serif'}`,
    ExtraFont:`Oswald', ${'sans-serif'}`
}

function App() {


  return (
    <div className="App">
      <Router>
      <ThemeProvider theme={Colors}>
        <GlobalStyles/>
        <Header/>
      </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
