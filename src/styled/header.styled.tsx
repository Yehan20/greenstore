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
height:500px ;
overflow-y:auto ;
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
        top:-1.4em;
        left:-1.6em;
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
    margin-top:auto ;
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
`

export const EmptyStyled=styled.div`
   display:flex !important;
   width:100% !important ;
   flex-direction:column ;
   align-items:center ;
   justify-content:space-around ;
   p{
    text-align:center ;
   }
`

export default HeaderStyled