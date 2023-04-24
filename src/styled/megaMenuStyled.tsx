import styled from "styled-components";

import  pepper from '../resources/images/pepper.jpg'
import  strawBerry from '../resources/images/starberry-garden.jpg'
import  raspberry from '../resources/images/raspberry-store.jpg'
import  cucamber from '../resources/images/cucamber.jpg'
import  vegCircle from '../resources/images/vegCircle.jpg'

const MegaMenuStyled = styled.div`
  padding:1em 2em;
  font-family:${({theme})=>theme.ParaFont};
  display:grid ;
  grid-template-columns:1fr 2fr 1fr ;
  grid-template-areas: "MenuItem1 BigMenu  MenuItem2"
                       "MenuItem3 BigMenu  MenuItem4" ;

  gap:1.2em; 
  grid-auto-rows:220px ;
  overflow:hidden ;
  div{
    padding:1em 1em 1em 1.5em ;
    background-color:#333 ;
    background-blend-mode:overlay;
    background-position:center ;
    background-size:cover ;
    background-repeat:no-repeat ;
    color:#fff;
    display:flex ;
    flex-direction:column ;
    justify-content:flex-end ;
    border-radius:0.3em ;
    column-gap:1.2em;

   
    h3,p{
        margin:0 ;
    }

    h3{
        font-size:1.7rem ;
        font-weight:600 ;
        line-height:1.2 ;
    }
    p{
        font-family:${({theme})=>theme.HeadingFont} ;
        font-weight:500 ;
        margin-bottom:0.5em ;
    }
  }                    

`
export const MenuChildStyled1 = styled.div`
   
    grid-area:MenuItem1 ;
    background-image:url(${strawBerry});
   
`
export const MenuChildStyled2 = styled.div`
  
    grid-area:MenuItem2 ;
    background-image:url(${raspberry});
`
export const MenuChildStyled3 = styled.div`

    grid-area:MenuItem3 ;
    background-image:url(${pepper});
`
export const MenuChildStyled4 = styled.div`

    grid-area:MenuItem4 ;
    background-image:url(${cucamber});
`
export const MenuBigChildStyled = styled.div`

   grid-area:BigMenu ;
   background-image:url(${vegCircle});
   justify-content:center!important ;
   text-align:center ;
   align-items:center ;
   h3{
    border-top:2px solid #fff ;
    border-bottom:2px solid #fff ;
    padding: 1em 0 ;
    font-size:2.1rem !important ;
    margin-bottom:1em !important;
    
   }
   a{
     display:block ;
     margin-top:1em ;
     padding: 0.3em  1em;
     color:#fff;
     font-size:1.3rem ;
     text-transform:uppercase;
     font-family:${({theme})=>theme.ExtraFont} ;
     font-weight :500 ;
     border:1px solid #fff;
     border-radius:0.3em ;
   }
`


export default MegaMenuStyled