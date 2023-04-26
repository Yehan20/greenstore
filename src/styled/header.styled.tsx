import styled from 'styled-components'

const HeaderStyled = styled.header`
   display:grid ;
   grid-template-columns:1fr 2fr 1fr ;
   position:relative ;

   padding:1em 1em ;
   @media(max-width:1199px){
    grid-template-columns:1fr 2fr 1fr 1fr ;
   }
   @media(max-width:767px){
    grid-template-columns:1fr 1fr 1fr ;
    position:fixed ;
    z-index:10 ;
    left:0;
    width:100%;
    top:0;
    background-color:#fff;
    padding-left:1em ;
    }
    @media(min-width:1600px){
      padding-left:3em;
    padding-right:3em;
    }
`
export const NavToggleStyleBtn = styled.button`
   
       background:transparent ;
       border:0;
       display:none ;
    
    @media(max-width:767px){
      
      display:block ;
      position:fixed ;
      top:3.5em;
      left:2em ;
      z-index:60 ;
      cursor: pointer;
    
    }
`

export const LogoContainerStyled = styled.div`
  img{
    display:block ;
    max-width:200px ;
  }
  @media(max-width:767px){
     grid-column:2/3 ;
     img{
     max-width:120px ;
     }
    }



`
export const NavOverLayStyled= styled.div`


  @media(max-width:1199px){

 grid-column: 2 / 4;
 


}
@media(max-width:767px){
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 55;
  transform-origin:left;
  transform:translateX(-100vw) ;
  opacity:0 ;
  transition:transform 350ms ease-in-out , opacity 350ms ease-in ;
  &.animate{
  transform:translateX(0) ;
  opacity:1 ;
  }
  
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
   @media(max-width:1199px){

      grid-column: 2 / 4;
    
    ul{
      gap:1.5em;
    }
   }
   @media(max-width:767px){
    /* grid-column: 1 / 2;
    grid-row:1 ; */
    position:fixed ;
    z-index:40 ;
    height:100% ;
    width:60% ;
    background-color:#fff;
    top:0 ;
    left:0 ;
 
        ul{
          flex-direction:column ;
          justify-content:flex-start ;
          padding-top:10em ;
          height:100% ;
          gap:3em;
          padding-left:0 ;
        }
    }

`

export const CartContainerStyled = styled.div`
  padding-top:1em ;
  @media(max-width:767px){
    grid-column:-1/3 ;
    grid-row:1 ;
    }
`

export const CartBtnStyled = styled.div`
   background-color:transparent ;
   cursor: pointer;
   border:0 ;
   outline:0;
   span{
    font-family:${({theme})=>theme.ParaFont} ;
   }
   div{
      margin-left: auto ;
   }
   /* display:inline-block ; */
   /* display:block ; */
   margin-left: auto ;
  @media(max-width:767px){
     svg{
       width:2rem ;
     }
  }
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
   width:36% ;
   margin-left:auto ;
   padding-top:1em ;
   padding-left:1em ;
  
   padding-right:1em ;
   height:100% ;
   display:flex;
   flex-direction:column;
   padding-bottom:1em ;
   h3{
    margin:0 ;
    font-family:${({theme})=>theme.HeadingFont} ;
   }
   @media(max-width:992px){
     width:40% ;

   }
   @media(max-width:992px){
     width:50% ;

   }
   @media(max-width:767px){
     width:70% ;

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
height:100% ;
overflow-y:auto ;
/* overflow-x:hidden ; */
margin-top:1em ;
margin-bottom:1em ;
  article{
    display:flex ;
    align-items:center;
    padding:0.5em 1em ;
    gap:1em;
    margin-bottom:0.5em ;
    margin-top:0.4em ;
    background-color:${({ theme }) => theme.grey};
      
  }


    h3{
      font-family:${({ theme }) => theme.HeadingFont} ;
    color:${({ theme }) => theme.dark} ;
      font-size:1rem;
      text-transform:uppercase ;
      margin:0 ;
    }
    p{
      font-family:${({ theme }) => theme.ParaFont} ;
      line-height:1.7 ;
      margin:0.5em 0 ;
      span{
        font-size:1rem ;
        color:${({ theme }) => theme.green} ;
        font-weight:500 ;
      }
    }
    div:first-child{
      /* border:1px solid #ccc; */
      border-radius:0.3em ;
      width:40% ;
      background-color:#fff ;
      padding:1em ;
      position:relative;
      button{
        background-color:transparent;
        border:0 ;
        position:absolute ;
        top:-0.5em;
        cursor: pointer;
        &:hover{
          color:red;
        }
        left:-1em;
        z-index:3 ;
      }
    
      img{
        width:100% ;
        display:block ;
        min-width:50px ;
        max-width:75px ;
        margin:auto auto ;
        height:70px ;
      }
    }

    div:last-child{
      width:60% ;
      /* border:1px solid #ccc; */
      border-radius:0.3em ;
      background-color:${({ theme }) => theme.grey};
      padding:0em 0em 0em 0 ;
      p:nth-of-type(1){
        display:flex !important ;

        gap:3em;
      }
      button{
        border-radius:0;
        border:0 ;
        color:#fff;
        background-color:${({ theme }) => theme.green};
        font-family:${({ theme }) => theme.ExtraFont} ;
        padding:0.3em 0.5em;
        cursor:pointer;
        &:hover{
           opacity:0.6 ;
        }
  
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
      div{
        display:flex ;
        margin:0em 0 0em 0 ;
        padding:0 ;
        span{
          display:inline-block ;
          font-family:${({ theme }) => theme.ParaFont} ;
          border-radius:0;
          padding:0.1em 1em ;
          border:0;
          background-color:#fff;
          text-align:center ;
         /* // max-width:100px ; */
          min-width:50px ;
          font-size:1rem ;
          &:focus{
            outline:0 ;
          }
        }

      }
    }
`

export const CartFooterStyled = styled.div`
    margin-top:0 ;
    p{
      font-family:${({theme})=>theme.HeadingFont};
      color:#222;
      padding:1em ;
      font-weight:600 ;
      text-transform:uppercase ;
      letter-spacing:0 ;
      display:flex ;
      justify-content:space-between ;
      span:last-child{
          color:${({theme})=>theme.green}
      }
      background-color:${({theme})=>theme.grey};
    }
    button{
      display:block ;
      width:100% ;
      border-radius:0.3 ;
      border:none;
      padding:0.5em 1em ;
      margin-bottom:0 ;
      cursor: pointer;
      background-color:${({theme})=>theme.dark};
      font-family:${({theme})=>theme.ExtraFont};
      color:#fff;
      font-size:1.2rem ;
      text-transform:uppercase;
      letter-spacing:1px;
      cursor: pointer;
      &:last-child{
        margin-top:0.5em ;
         
      }
    }
    #checkout{
      background-color:${({theme})=>theme.green} ;
    }
    @media(max-width:767px){
        margin-top:auto ;
    }
`

export const EmptyStyled=styled.div`
   display:flex !important;
   width:100% !important ;
   flex-direction:column ;
   align-items:center ;
   /* justify-content:space-between; */
   height:100% ;
   row-gap:1em;
   padding-top:1em !important;
   div{
    align-self:stretch ;
    padding:0.2em ;
    display:block!important ;
    height:550px ;
    overflow:auto ;
   }
   table{
    align-self:stretch ;
    padding:0.2em ;
 
 
    width:100% ;
    thead{
      font-family:${({theme})=>theme.HeadingFont};
      font-size:0.8rem ;
      font-weight:500 ;
    }
    tbody{
      font-family:${({theme})=>theme.ParaFont};
      font-size:0.8rem ;

    }
    img{
      max-width:50px !important;
      height:50px !important ;
    }
   }
   h3{
    font-family:${({theme})=>theme.HeadingFont};
    font-size:1.2rem ;
    text-align:center ;
    text-transform:capitalize ;
   }
   p{
    text-align:center ;
    font-family:${({theme})=>theme.HeadingFont};
    font-weight:600 ;
    font-size:1.1rem ;
   }
   button{
    position:static  !important;
    display:block ;
      width:100% ;
      border-radius:0.3 ;
      border:none;
      padding:0.5em 1em ;
      margin-bottom:0 ;
      margin-top:auto ;
      cursor: pointer;
      background-color:${({theme})=>theme.dark};
      font-family:${({theme})=>theme.ExtraFont};
      color:#fff;
      font-size:1.2rem ;
      text-transform:uppercase;
      letter-spacing:1px;
      cursor: pointer;
      &:hover{
          color:#fff !important;
      }
   }
   
`

export default HeaderStyled