import styled, { ThemeConsumer } from "styled-components";

const FooterStyled = styled.footer`
   padding-top:1em ;
   h3{
    font-family:${({theme})=>theme.HeadingFont} ;
   }
`
export const FooterOneStyled = styled.div`
  background-color:${({theme})=>theme.grey} ;
  padding:2em 1.5em ;
  display:flex ;

  margin:0 ;
  @media(max-width:767px){
    flex-wrap:wrap ;
  }
  @media(min-width:1600px){
     padding:1em 3em ;
  }
`
export const FooterTwoStyled = styled.div`
    background-color:${({theme})=>theme.dark} ;
    padding:1em 0.5em ;
    text-align:center ;
    p{
        margin:0 ;
        color:#fff;
        font-family:${({theme})=>theme.ExtraFont}  ;
    }
   @media(max-width:767px){
      p{
        font-size:0.8rem ;
      }
   }
`


export const FooterAboutStyled = styled.div`
   width: 100%;
   img{
    max-width:200px ;
  }
   p{
    font-family:${({theme})=>theme.ParaFont} ;
    margin-top: 1em;
    line-height:1.8 ;
    padding-left:1.5em;
   }
   div{
    padding-left:1.5em;
    display:flex ;
    gap:1em;
    a:hover{
       opacity:0.8 ;
    }
   }

   @media(max-width:767px){
    div{
    padding-left:0em;
    }
    p{
      padding-left:0em;
    }
    img{
      display:block;
      margin:0 auto ;
    }
   }
`
export const FooterInformationStyled = styled.div`
  width:100% ;
  h3{
    padding-left:5em ;
  }
  ul{
    padding-top:1em;
    padding-left:7em ;
  }
  li{
    font-family:${({theme})=>theme.HeadingFont} ;
    margin-bottom:1em;
    
  }
  a{
    color:#111;
  }
  @media(max-width:992px){
       ul{
        padding-left:3em ;
       }
       h3{
        padding-left:2em ;
       }
    }
    @media(max-width:767px){
      ul{
        padding-left:1em ;
       }
       h3{
        padding-left:0em ;
       }
  }


`
export const FooterInstragramStyled = styled.div`
  width:100% ;

`
export const MiniGallleryStyled = styled.div`
    display:flex ;
    flex-wrap:wrap ;
    gap:10px;
    img{
      max-width:300px ;
      width:128px ;
      height:128px ;
    }
    @media(max-width:992px){
        img{
          width:70px ;
      height:70px ;
        }
    }
`

export default FooterStyled;