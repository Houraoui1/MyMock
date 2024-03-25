import React from 'react'
import Image from '../Imgs/SideImage.png'
const SideImage = () => {
    const img = Image
  return (
    <> 
    <img
    src={img}
    style={{
      width: "70%",
      height: "60%",
    }}
  />
  </>
  )
}

export default SideImage