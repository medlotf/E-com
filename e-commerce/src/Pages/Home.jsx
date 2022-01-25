import React from 'react';
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import NavBar from "./../Components/NavBar"
import Slider from "./../Components/Slider"

function Home(props) {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;