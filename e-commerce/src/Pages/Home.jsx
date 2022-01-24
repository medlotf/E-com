import React from 'react';
import Announcement from '../Components/Announcement';
import NavBar from "./../Components/NavBar"
import Slider from "./../Components/Slider"

function Home(props) {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
}

export default Home;