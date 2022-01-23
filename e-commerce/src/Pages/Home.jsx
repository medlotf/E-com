import React from 'react';
import Announcement from '../Components/Announcement';
import NavBar from "./../Components/NavBar"

function Home(props) {
  return (
    <div>
      <Announcement />
      <NavBar />
    </div>
  );
}

export default Home;