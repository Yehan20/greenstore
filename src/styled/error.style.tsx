import styled from "styled-components";

const ErrorStyled = styled.div`
   padding-top:2em ;
   text-align:center ;
   h3{
    font-size:1.4rem ;
    font-family:${({theme})=>theme.ParaFont} ;
    color:${({theme})=>theme.green}
   }
   @media(max-width:767px){
      padding-top:9em ;
   }

`

export default ErrorStyled