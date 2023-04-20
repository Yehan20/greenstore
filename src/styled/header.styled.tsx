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

   border:0 ;
   outline:0;
   display:inline-block ;
   display:block ;
   margin-left: auto ;
`
export default HeaderStyled