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
.toggle-container{
    display:flex;
    align-items:center;
    span{
        // position:absolute;
        left:0;
        top:0;
        // background:rgb(117, 162, 57);
        padding:0.7em 0.5em;
        display:inline-block;
        color:#222;
        border-radius:50%;
        font-weight:600;
    }
}

`
export default GlobalStyles