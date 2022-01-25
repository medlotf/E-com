import React from 'react';
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import NavBar from "./../Components/NavBar"
import Slider from "./../Components/Slider"
import Products from "./../Components/Products"

function Home(props) {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;