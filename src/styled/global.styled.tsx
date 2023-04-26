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
.Toastify__toast-body > div:last-child{
  color:#222!important;
  font-family:'poppins',sans-serif;
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

.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius:10px ;
    height: 6px;
    z-index: 999;
    background: rgb(117, 162, 57);
    transform-origin: 0%;
  }

@media(min-width:1600px){
   main{
    padding:0 3em;
   }

}

`
export default GlobalStyles