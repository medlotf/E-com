import React, { useEffect, useState } from 'react';
import "./../styles/slider.css"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from "./../data/sliderItems"

function Slider(props) {

  const [slideIndex, setSlideIndex] = useState(1)
  const [Item, setItem] = useState(sliderItems[slideIndex - 1])

  let handleClick = (dir) => {
    if (dir === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    else if (dir === "right")
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  }

  useEffect(() => {
    console.log(sliderItems)
    setItem(sliderItems[slideIndex - 1])
  }, [slideIndex])

  return (
    <div className='container'>
      <div className="arrow left" onClick={() => handleClick("left")} >
        <ArrowBackIosOutlinedIcon />
      </div>
      <div className="slider">
        <div className="imageContainer">
          <img src={Item.img} />
        </div>
        <div className="infoContainer" style={{ backgroundColor: Item.color }}>
          <h1>{Item.title}</h1>
          <p>{Item.description}</p>
          <button style={{ borderColor: Item.buttonColor, backgroundColor: Item.buttonColor }}>SHOP NOW</button>
        </div>
      </div>
      <div className="arrow right" onClick={() => handleClick("right")} >
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div >
  );
}

export default Slider;