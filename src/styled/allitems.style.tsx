import styled from "styled-components";

const AllItemStyled= styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({theme})=>theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }


`
export const FruitItemStyled= styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({theme})=>theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }
  div{
    width:100% ;
    justify-content:space-between ;
  }
 
`
export const VegItemStyled= styled.section`
  padding:1em 2em;
  display:flex ;
  flex-wrap:wrap ;
  h2{
    font-family:${({theme})=>theme.HeadingFont} ;
   width:100% ;
   margin:0 0 0.5em 0 ;
  }
  div{
    width:100% ;
    justify-content:space-between ;
  }
 
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
    font-family:${({theme})=>theme.ParaFont} ;
   }
   button{
    background-color:${({theme})=>theme.green} ;
    border:none ;
    padding:0.7em 1em ;
    border-bottom-right-radius:0.2em ;
    border-top-right-radius:0.2em ;
    color:#fff;
    font-weight:600 ;

   }
`

export const SideBarStyled= styled.aside`
  width:20% ;
  border-radius:0.3em ;
  border-left:1px solid #ccc ;
  border-right:1px solid #ccc ;
  align-self: flex-start;
   h3{
    border-top-left-radius:0.3em ;
    border-top-right-radius:0.3em;
    padding:1.5em 1em ;
    margin:0 ;
    font-family:${({theme})=>theme.ParaFont} ;
    color:#fff;
    background-color:${({theme})=>theme.green} ;
   }
   .Active{
    color:${({theme})=>theme.green}  !important;
    border-color:${({theme})=>theme.green} !important ;
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
    font-family:${({theme})=>theme.ExtraFont} ;
    &:hover{
        color:${({theme})=>theme.green} ;
        border-color:${({theme})=>theme.green} ;
    }
   }
`
export const ProductsContainerStyled = styled.div`
width:80% ;
display:flex ;
flex-wrap:wrap ;
justify-content:space-evenly ;
gap:1em;
h4{
  font-family:${({theme})=>theme.ExtraFont} ;
  font-size:2rem ;
}
    a{
    
    border:1px solid #ccc;
    border-radius:0.3em;
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
        font-family:${({theme})=>theme.HeadingFont} ;
        font-weight:500;
        letter-spacing:1px ;
        text-transform:uppercase;
        color:${({theme})=>theme.dark}
        
    }
    div{
        background-color:${({theme})=>theme.grey} ;
        padding:1em;
    }
    p{
        margin:0.5em 0;
        font-family:${({theme})=>theme.ExtraFont} ;
        color:${({theme})=>theme.green};
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
`
export default AllItemStyled;