import styled from "styled-components";

const SomeProductsStyled = styled.section`
  padding:1em 2em ;
  h2{
    text-align:center ;
    font-size:2rem ;
    font-family:${({theme})=>theme.HeadingFont};
    color:${({theme})=>theme.dark};
    font-weight:600 ;
  }
  h3{
    margin:0;
  }
  font-family:${({theme})=>theme.ParaFont} ;

`
export const SomeProductVegStyled = styled.div`
  position: relative;
  color:#fff;
  display:flex;
  justify-content:flex-end;
  flex-direction:column ;
  min-height:250px;
  border-radius:0.3em;
  overflow:hidden;
  padding:1em;
  grid-column:-1/4 ;
  img{
    position:absolute;
    z-index:-1 ;
    height:100% ;
    width:100%;
    object-fit:cover;
    inset:0;
    transition: transform 250ms ease-in ;
  }
  &:hover img{
        transform:scale(1.05) ;
       }
  h3{
    font-size:1.7rem;
  }

  @media(max-width:992px){

grid-column:1/-1;
grid-row:2 ;
}
@media(max-width:767px){
    

    width:100% ;
}

`
export const SomeProductFruitStyled = styled.div`
  position:relative ;
  color:#fff;
  padding:1em;
  grid-column:1/3 ;
  min-height:250px;
  border-radius:0.3em;
  overflow:hidden ;
  display:flex;
  justify-content:flex-end;
  flex-direction:column ;
   grid-row:2 ;
  img{
     position:absolute;
    z-index:-1 ;
    height:100% ;
    width:100%;
    object-fit:cover;
    inset:0;
    transition: transform 250ms ease-in ;
  }
  &:hover img{
        transform:scale(1.05) ;
       }
  h3{
    font-size:1.7rem ;
  }

  @media(max-width:992px){
    grid-row :1 ;
    grid-column:1/-1 ;

 }
 @media(max-width:767px){
/*     
       all:unset; */
     /* grid-row:unset ; */
     width:100% ;
  }

`
export const SomeProductStyled = styled.div`
  display:grid ;
  grid-template-columns:repeat(5,1fr);
  grid-gap:1em;
  /* grid-auto-rows:300px; */
  grid-auto-rows:290px ;

   
  article{

    border:4px solid ${({theme})=>theme.grey} ;

    border-radius:0.3em;
    overflow:hidden;
    text-align:center ;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    padding:1em 0 0em 0;
 
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
    
     }
    
   
  }
  .Fruit{
    grid-row:2 ;
  }
  .Vegetables{
    grid-row:1;
  }

  @media(max-width:992px){

     grid-template-columns:1fr 1fr 1fr  !important ;
     grid-auto-columns:100px;
     grid-auto-rows:1fr 1fr ;
     .Fruit{
         grid-row:4 ;
         /* grid-column:1 ; */

     }
     .Vegetables{
    grid-row:3;
  }
  }
  @media(max-width:767px){
     /* grid-template-columns:repeat(auto-fit , minmax(1fr,600px)) !important; */
     display:flex ;
     flex-wrap:wrap ;
     /* .Fruit, #Vegetales{
       grid-row:unset;
     } */
     a{
      flex-grow:1 ;
     }
  }
  @media(min-width:1600px){
     grid-auto-rows:350px ;
     article{
      height:100% ;
     }
  }

`
export default SomeProductsStyled