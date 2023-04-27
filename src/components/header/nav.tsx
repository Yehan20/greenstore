import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaBars,FaTimes} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { NavOverLayStyled, NavStyled, NavToggleStyleBtn } from '../../styled/header.styled'



const Nav: React.FC= () => {
  const Linkref = useRef<(HTMLAnchorElement | null)[]>([])
  const parentRef = useRef<HTMLDivElement | null>(null)

  const location = useLocation();

  const [currentPath, setCurrentPath] = useState<string>('')
  const [showNav, setShowNav] = useState<boolean>(false)




  const toggleNav = (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
    //  if we click some where else of the cart
    console.log('click');
    if (!(parentRef.current === (e.target as Node))) {
      return;
    }
    setShowNav(!showNav)
  }



  useEffect(() => {
    setCurrentPath(location.pathname)
       setShowNav(false)
  }, [location])


  return (
    <>
      <AnimatePresence>

        <NavOverLayStyled className={showNav ? 'animate' : ''} ref={parentRef} onClick={toggleNav}>
          <NavStyled   >
            <ul>
              <li>
                <Link ref={el => Linkref.current[0] = el} className={`${Linkref.current[0]?.pathname === currentPath ? 'active' : ''}`} to='/'>Home</Link>
              </li>
              <li>
                <Link ref={el => Linkref.current[1] = el} className={`${Linkref.current[1]?.pathname === currentPath ? 'active' : ''}`} to='/all'>All</Link>
              </li>
              <li>
                <Link ref={el => Linkref.current[2] = el} className={`${Linkref.current[2]?.pathname === currentPath ? 'active' : ''}`} to='/vegetables'>Vegetables</Link>
              </li>
              <li>
                <Link ref={el => Linkref.current[3] = el} className={`${Linkref.current[3]?.pathname === currentPath ? 'active' : ''}`} to='/fruits'>Fruits</Link>
              </li>
            </ul>

          </NavStyled>
        </NavOverLayStyled>

      </AnimatePresence>

      <NavToggleStyleBtn onClick={() => setShowNav(!showNav)}>
       {showNav?<FaTimes color={'rgb(117, 162, 57)'} size={'20px'} />:<FaBars color={'rgb(117, 162, 57)'} size={'20px'} />}
      </NavToggleStyleBtn>
    </>
  )
}

export default Nav