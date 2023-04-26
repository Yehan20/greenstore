import styled from "styled-components";

const SpecialItemStyled = styled.section`
   padding:1em 2em ;
   display:flex ;
   flex-wrap:wrap ;
   gap:1em;
   justify-content:space-between ;
   color:#fff;
   p{
    font-family:${({theme})=>theme.ParaFont} ;
    margin:0;
   }
   h3{
    font-family:${({theme})=>theme.HeadingFont} ;
    margin:0;
   }
   a{
    
    font-family:${({theme})=>theme.ExtraFont} ;

   }

`

export const SpecialItemstyled = styled.div`
border-radius:0.3em;
 display:flex;
 flex-direction:column;
 justify-content:center; 
 /* background-color:red ; */

 /* max-width:590px ; */
 width:48% !important ;
 min-height:250px;
 overflow:hidden ;
 position:relative ;
 width:100%;
 padding:1em 2em;
 display:flex ;
 column-gap:1.1em;
 margin-bottom:2em ;
 h3{
    font-size:2rem ;
 }
 p{
    font-size:1.5rem;
    margin-top:0.5em;
 }
 a{
    display:inline-flex ;
    align-self:flex-start ;
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
 
 &:hover img{
        transform:scale(1.05) ;
    }
 img{
    position:absolute;
    z-index:-1 ;
    height:250px ;
    width:100%;
    object-fit:cover;
    inset:0;
    transition: transform 250ms ease-in ;
  
 }
 @media(max-width:767px){
     width:100% !important ;
 }

`
// export const SpecialVegStyled = styled.div`
// border-radius:0.3em;
//  display:flex;
//  flex-direction:column;
//  overflow:hidden ;
//  justify-content:flex-end; 
//   max-width:590px ;
//   min-height:220px;
//   position:relative;
//   width:100%;
//   padding:1em 2em;
//   display:flex;
//   img{
//     position:absolute;
//     z-index:-1;
//     height:220px;
//     width:100%;
//     object-fit:cover;
//     inset:0;
//   }
// `
export const PremireProductStyled = styled.div`
   margin-bottom:3em ;
   margin-top:3em ;

     svg{
      font-size:3rem ;
     }
 
   h3{
     text-align:center ;
     color:${({theme})=>theme.dark};
     font-size:2rem ;
   }
   width:100% ;
    article{
      
        display:flex ;
        align-items:center;
        img{
            display:block ;
            width:100% ;
            max-width:500px ;
            margin:0 auto ;
        }
    }
    div{
        /* background-color:red ; */
        width:25% ;
        margin-top:auto ;
    }

    @media(max-width:1199px){
     svg{
       font-size:2rem;

     }
     img{
      max-width:300px !important ;
     }
   }
    @media(max-width:992px){

     svg{
       font-size:1.5rem;
     }   
     p{
      font-size:0.9rem ;
     }
   }
   @media(max-width:767px){
   
      article{
         
         flex-wrap:wrap ;
         align-content:center ;
         justify-content:center ;
         gap:1em;
         /* div{
            width:48% ;
         } */
         div{
         width:80% ;
         margin:1em auto;
      }
         img{
            width:100% ;
            max-width:500px !important ;
         }
      }
   p{
     
   }
     
 }
`
export const MiniCardStyled = styled.div`
  background-color:#f5f5f5 ;
  border-radius:0.3em ;
  outline:1px solid #ccc;
  margin-top:auto ;
  margin-bottom:2.5em ;
  width:auto !important;
  padding:0.75em 1em;
  p{
     font-family:${({theme})=>theme.HeadingFont};
     font-weight:600 ;
  }
  gap:1em;
  align-items:center;
  display:flex ;
  justify-content:space-evenly ;
  color:${({theme})=>theme.dark}
`


export default SpecialItemStyled