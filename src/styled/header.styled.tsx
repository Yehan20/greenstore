import styled from 'styled-components'

const HeaderStyled = styled.header`
   display:grid ;
   grid-template-columns:1fr 2fr 1fr ;
   /* align-items:center ; */
   padding:1em 1em ;
`

export const LogoContainerStyled = styled.div`
  img{
    display:block ;
    max-width:200px ;
  }
`
export const NavStyled = styled.nav`
   padding-top:2em ;
   ul{
    display:flex ;
    align-items:center ;
    list-style:none ;
    justify-content:space-evenly;
    margin: 0;
   }
   li {
      font-family:${({theme})=>theme.HeadingFont} ;
      font-size:1.2rem;
      .active::before{
            transform:scale(1,1) ;
       }
      a{
         color:${({theme})=>theme.green} ;
         display:inline-block;
         position:relative ;

         &::before{
           position:absolute;
           content:'';
           top:1.4em;
           left:0;
           width:80%;
           height:2px ;
           border-radius:0.3em;
           background-color:${({theme})=>theme.dark} ;
           transform-origin:left;
           transform:scale(0,1) ;
           transition:transform 250ms ease-in-out
        
         }
         &:hover::before{
             transform:scale(1,1) ;
           }
      }
   }
`

export const CartContainerStyled = styled.div`
  padding-top:1em ;
`

export const CartBtnStyled = styled.button`
   background-color:transparent ;
   cursor: pointer;
   border:0 ;
   outline:0;
   display:inline-block ;
   display:block ;
   margin-left: auto ;
`

export const CartOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

`
export const CartStyled = styled.div`
   background-color:#fff ;
   width:30% ;
   margin-left:auto ;
   padding-top:3em ;
   padding-left:3em ;
   padding-right:3em ;
   height:100% ;
   display:flex;
   flex-direction:column;
   padding-bottom:2em ;
   h3{
    margin:0 ;
    font-family:${({theme})=>theme.HeadingFont} ;
   }
`

export const CartTopStyled = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between ;
   button{
    background-color:transparent;
    border:none;
    cursor: pointer;
   }
`

export const CartBodyStyled = styled.div`
   
`

export const CartFooterStyled = styled.div`
    margin-top:auto ;
    button{
      display:block ;
      width:100% ;
      border-radius:0.3 ;
      border:none;
      padding:0.5em 1em ;
      margin-bottom:1em ;
      cursor: pointer;
      background-color:${({theme})=>theme.dark};
      font-family:${({theme})=>theme.ExtraFont};
      color:#fff;
      font-size:1.2rem ;
      text-transform:uppercase;
      letter-spacing:1px;
      cursor: pointer;
    }
    #checkout{
      background-color:${({theme})=>theme.green} ;
    }
`


export default HeaderStyled