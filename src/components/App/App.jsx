import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './../../styles/index.css'
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import Button from '../Button/Button';
import AirPContainer from '../Section/AirPContainer';
import BtnNavigation from '../Section/BtnNavigation';
import Credit from '../Credit/Credit';

export default function App () {
  const [theme, setTheme] = useState('light') ;
  const [animationState, setAnimationState] = useState('close') ;
  const [activeIndex, setActiveIndex] = useState(0) ;

  return (
    <div id='root' className={theme}>
      <Header theme={theme} changeTheme={setTheme} />
      <main className={animationState + ' ' + theme}>
        <Hero />
        <Section activeIndex={activeIndex} changeIndex={setActiveIndex}/>
        <AirPContainer animationState={animationState} activeIndex={activeIndex} />
        <BtnNavigation activeIndex={activeIndex} changeIndex={setActiveIndex} />
      </main>
      <Button animationState={animationState} changeAnimationState={setAnimationState} />
      <Credit />
    </div>
  )
}