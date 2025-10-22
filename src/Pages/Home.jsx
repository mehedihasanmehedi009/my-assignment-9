import React from 'react';
import HeroSlider from './Animal';
import MyContainer from '../MyContainer/MyContyner';
import Animalcard from './Animalcard';
import Doctor from './Doctor';

const Home = () => {
  return (
    <div>
      <MyContainer>
        <HeroSlider></HeroSlider>
        <Animalcard></Animalcard>
        <Doctor></Doctor>
      </MyContainer>
      
    </div>
  );
};

export default Home;