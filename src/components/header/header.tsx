
import HeaderStyled, { CartBtnStyled, CartContainerStyled, LogoContainerStyled } from '../../styled/header.styled'
import logo from '../../resources/images/logo.jpg'
import { useEffect,  useState } from 'react'
import Cart from '../cart/cart';
import Toast from './toast';

import Nav from './nav';
import CartToggle from './cartToggle';


const Header = () => {

  const [showCart, setShowCart] = useState<Boolean>(false)


  useEffect(() => {
    console.log('heDWR RUN');
  })

  return (
    <HeaderStyled>
      <LogoContainerStyled>
        <img src={logo} alt="Logo" />
      </LogoContainerStyled>

      <Nav />

      <CartContainerStyled>

        <CartBtnStyled title='Click to show Cart' onClick={() => setShowCart(!showCart)}>
          <CartToggle />

        </CartBtnStyled>
      </CartContainerStyled>

      <Cart setShowCart={setShowCart} showCart={showCart} />
      <Toast />


    </HeaderStyled>
  )
}

export default Header