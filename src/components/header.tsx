
import HeaderStyled, { CartBtnStyled, LogoContainerStyled, NavStyled } from '../styled/header.styled'
import logo from '../resources/images/logo.jpg'
import { Link } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi';
const Header = () => {
  return (
    <HeaderStyled>
        <LogoContainerStyled>
             <img src={logo} alt="Logo" />
        </LogoContainerStyled>
        <NavStyled>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='all/'>All</Link>
                </li>
                <li>
                    <Link to='vegetables/'>Vegetables</Link>
                </li>
                <li>
                    <Link to='/fruits'>Fruites</Link>
                </li>
            </ul>
        </NavStyled>
        <CartBtnStyled>
             <GiShoppingBag color='green'/>
        </CartBtnStyled>
    </HeaderStyled>
  )
}

export default Header