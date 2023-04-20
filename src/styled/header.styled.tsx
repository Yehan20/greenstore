import styled from 'styled-components'

const HeaderStyled = styled.header`
   display:grid ;
   grid-template-columns:1fr 2fr 1fr ;
`

export const LogoContainerStyled = styled.div`
  img{
    display:block ;
    max-width:200px ;
  }
`
export const NavStyled = styled.nav`
   ul{
    display:flex ;
    align-items:center ;
    list-style:none ;
   }
   li {
      font-family:${({theme})=>theme.HeadingFont} ;
   }
`
export const CartBtnStyled = styled.button`

`
export default HeaderStyled