import React from 'react';
import HeroSlider from './Animal';
import MyContainer from '../MyContainer/MyContyner';
import Animalcard from './Animalcard';
import Doctor from './Doctor';
import Tips from './Tips';

const Home = () => {
  return (
    <div>
      <MyContainer>
        <HeroSlider></HeroSlider>
        <Animalcard></Animalcard>
        <Tips></Tips>
        <Doctor></Doctor>
      </MyContainer>
      
    </div>
  );
};

export default Home;