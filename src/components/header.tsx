
import HeaderStyled, { CartBtnStyled, CartContainerStyled, LogoContainerStyled, NavStyled } from '../styled/header.styled'
import logo from '../resources/images/logo.jpg'
import { Link, useLocation } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi';
import {useEffect, useRef,useState} from 'react'

// let currentPath = '';
const Header = () => {
  const location = useLocation();
  const Linkref = useRef<(HTMLAnchorElement | null)[]>([])
  const [currentPath,setCurrentPath]=useState<String>('')


  useEffect(()=>{
    setCurrentPath(location.pathname)  
  },[location])
  

  return (
    <HeaderStyled>
        <LogoContainerStyled>
             <img src={logo} alt="Logo" />
        </LogoContainerStyled>
        <NavStyled>
            <ul>
                <li>
                    <Link  ref={el=>Linkref.current[0]=el}  className={`${Linkref.current[0]?.pathname===currentPath?'active':''}`} to='/'>Home</Link>
                </li>
                <li>
                    <Link ref={el=>Linkref.current[1]=el}   className={`${Linkref.current[1]?.pathname===currentPath?'active':''}`}   to='/all'>All</Link>
                </li>
                <li>
                    <Link ref={el=>Linkref.current[2]=el}  className={`${Linkref.current[2]?.pathname===currentPath?'active':''}`}  to='/vegetables'>Vegetables</Link>
                </li>
                <li>
                    <Link ref={el=>Linkref.current[3]=el}   className={`${Linkref.current[3]?.pathname===currentPath?'active':''}`} to='/fruits'>Fruites</Link>
                </li>
            </ul>
        </NavStyled>
        <CartContainerStyled>
        <CartBtnStyled>
             <GiShoppingBag color='green' size={"40px"}/>
        </CartBtnStyled>
        </CartContainerStyled>
    </HeaderStyled>
  )
}

export default Header