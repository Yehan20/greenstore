import styled from "styled-components";

const AllItemStyled = styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({ theme }) => theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }


`
export const FruitItemStyled = styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({ theme }) => theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }
  div{
    width:100% ;
    justify-content:space-between ;
  }
  /* @media(max-width:767px){
     margin-top:1em ;
  } */
`
export const VegItemStyled = styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({ theme }) => theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }
  div{
    width:100% ;
    justify-content:space-between ;
  }
  /* @media(max-width:767px){
     margin-top:1em ;
  } */
 
`


export const SearchStyled = styled.section`
   padding:1em 2em ;
   display:flex;
   input{
    display:block ;
    padding:0.7em 1em ;
    border-top-left-radius:0.2em ;
    border-bottom-left-radius:0.2em ;
    border:1px solid #ccc;
    outline:none ;
    font-family:${({ theme }) => theme.ParaFont} ;
   }
   button{
    background-color:${({ theme }) => theme.green} ;
    border:none ;
    padding:0.7em 1em ;
    border-bottom-right-radius:0.2em ;
    border-top-right-radius:0.2em ;
    color:#fff;
    font-weight:600 ;

   }
   @media(max-width:767px){
      margin-top:6em ;
   }
`

export const SideBarStyled = styled.aside`
  width:20% ;
  border-radius:0.3em ;
  border-left:1px solid #f4f4f4 ;
  border-right:1px solid #f4f4f4 ;
  align-self: flex-start;
   h3{
    border-top-left-radius:0.3em ;
    border-top-right-radius:0.3em;
    padding:1.5em 1em ;
    margin:0 ;
    font-family:${({ theme }) => theme.ParaFont} ;
    color:#fff;
    background-color:${({ theme }) => theme.green} ;
   }
   .Active{
    color:${({ theme }) => theme.green}  !important;
    border-color:${({ theme }) => theme.green} !important ;
   }
   button{
    display:block ;
    border:0 ;
    background-color:transparent;
    padding:1.5em  1em;
    border-bottom:1px solid #ccc ;
    width:100% ;
    text-align:left ;
    cursor: pointer;
    font-size:1.3rem ;
    word-spacing:1px ;
    border-radius:0.2em ;
    font-family:${({ theme }) => theme.ExtraFont} ;
    &:hover{
        color:${({ theme }) => theme.green} ;
        border-color:${({ theme }) => theme.green} ;
    }
   }

   @media(max-width:992px){
     width:100% ;
     justify-content:center ;
     display:flex ;
     flex-direction:column ;
     margin-bottom:1em ;
     border-bottom:1px solid #f4f4f4 ;
   /* //   border-right:1px solid #f4f4f4 ; */
     h3{
      padding: 0.5em 1em;
      text-align:center ;
     }
     div{
      flex-grow:1 ;
      display:flex ;
      flex-wrap:wrap ;
      justify-content:center ;
      button{
        text-align:center ;
      padding:0.5em 1em ;
      border-radius:0 ;
       max-width:200px ;
       border-bottom:1px solid #f4f4f4 ;
      }

     }

   }
   @media(max-width:767px){
      margin-top:5em ;
   }
`
export const ProductsContainerStyled = styled.div`
width:80% ;
display:flex ;
flex-wrap:wrap ;
justify-content:space-evenly ;
gap:1em;
h4{
  font-family:${({ theme }) => theme.ExtraFont} ;
  font-size:2rem ;
}
    a{

    border-radius:0.3em;    
    border:4px solid ${({ theme }) => theme.grey} ;
    overflow:hidden;
    text-align:center ;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    padding:1em 0 0em 0;
    max-width:15rem ;
    width:100% ;
  
    h3{
        font-size:1.1rem ;
        font-family:${({ theme }) => theme.HeadingFont} ;
        font-weight:500;
        letter-spacing:1px ;
        text-transform:uppercase;
        color:${({ theme }) => theme.dark}
        
    }
    div{
        background-color:${({ theme }) => theme.grey} ;
        padding:1em;
    }
    p{
        margin:0.5em 0;
        font-family:${({ theme }) => theme.ExtraFont} ;
        color:${({ theme }) => theme.green};
        font-weight:600;
    }
     img{
        display:block;
        width:100% ;
        max-width:150px ;
        height:150px ;
        margin:0 auto ;
        transition:all 250ms ease-in;
        padding-bottom:0.5em ;
    
     }

  }
  @media(max-width:992px){
     width:100% ;
  }
`

export const SingleProductStyled = styled.div`
    display:flex ;
    padding:1em 3em ;
    gap:0.3em;
    background-color:${({ theme }) => theme.grey};
    h3{
      font-family:${({ theme }) => theme.HeadingFont} ;
    color:${({ theme }) => theme.dark} ;
      font-size:1.4rem;
      text-transform:uppercase ;
      margin:0 ;
    }
    p{
      font-family:${({ theme }) => theme.ParaFont} ;
      line-height:1.7 ;
      span{
        font-size:1.2rem ;
        color:${({ theme }) => theme.green} ;
        font-weight:500 ;
      }
    }
    div:first-child{
      /* border:1px solid #ccc; */
      border-radius:0.3em ;
      width:100% ;
      background-color:#fff ;
      padding:1em ;
      img{
        width:100% ;
        display:block ;
        max-width:350px ;
        margin:auto auto ;
        height:350px ;
      }
    }

    div:last-child{
      width:100% ;
      /* border:1px solid #ccc; */
      border-radius:0.3em ;
      background-color:${({ theme }) => theme.grey};
      padding:1em ;
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
        padding:0.3em 1.5em;
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
        margin:2em 0 2em 0 ;
        
        input{
          border-radius:0;
          padding:0.7em 1em ;
          border:0;
          text-align:center ;
          max-width:120px ;
          font-size:1rem ;
          &:focus{
            outline:0 ;
          }
        }
        div{
          margin-left:2em ;
          padding:0 ;
          margin-top:0 ;
          margin-bottom:0 ;
          button{
            text-transform:uppercase;
            letter-spacing:1px ;
            font-size:1rem ;
            padding:0.6em 3em ;
          }
        }
      }
    }
    @media(max-width:1199px){
     margin-top:2em ;
     div:last-child{
      padding-right:0 ;
        div{
        button{
          font-size: 0.9rem;
          padding:0.5em 0.7em !important ;
        }
      }
     }
  }
  @media(max-width:992px){
     align-items:flex-start ;
     margin-top:2em ;
     div:last-child{
      width:60% ;
      padding-top:0 ;
      input{
        max-width:100px ;
      }
     }
     div:first-child{
          width:40%;
          padding-left:0 ;
          img{
         height:250px ;
      }
     }
     p{
      font-size:0.9rem ;
      margin-bottom:0 ;
     }
     h3{
      font-size:1.3rem ;
     }
     p{
     span{
      font-size:1.1rem ;
     }
    }
  }

  @media(max-width:767px){
    margin-top:7em!important ;
    padding:1em 2em ;
     flex-direction:column ;
     div:first-child,div:last-child{
      width:100% ;
     }
     div:last-child{
      margin-top:1em ;
      padding-left:0 ;
      input{
        max-width:65px !important;
      }
      /* div{
        flex-wrap:wrap ;
      } */
      button{
        font-size:0.8rem !important ;
        white-space:nowrap ;
      }
     }
  }
  
`

export default AllItemStyled;