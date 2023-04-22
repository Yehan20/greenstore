import React from 'react'
import {ThreeCircles} from 'react-loader-spinner'
const Loader = () => {
  return (
    <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
  )
}

export default Loader