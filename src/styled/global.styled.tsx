import { createGlobalStyle } from "styled-components";
import {ColorType} from '../types/types'
const GlobalStyles = createGlobalStyle<{theme:ColorType}>`

*,*::before,*::after{
    box-sizing: border-box;
}
body{
    margin: 0;
    min-height: 100vh;
}
img{
    max-width: 100%;
}
a{
    text-decoration: none;
}
main{
    overflow:hidden;
}

`
export default GlobalStyles