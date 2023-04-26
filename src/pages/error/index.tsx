import { motion } from 'framer-motion'
import {BiSad} from 'react-icons/bi'
import { pageVariantAll } from '../../animations/varients'
import ErrorStyled from '../../styled/error.style'
const Error = () => {

   const   ErrorMotion = motion(ErrorStyled)
  return (
    <ErrorMotion variants={pageVariantAll} initial='hidden' animate='visible' exit='exit'>
        <BiSad size={"80px"} color="rgb(117, 162, 57)"/>
        <h3>Ops We Couldnt Find the Page You Were Looking for</h3>
    </ErrorMotion>
  )
}

export default Error