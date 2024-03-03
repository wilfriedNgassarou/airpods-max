import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './../../styles/index.css'
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import Button from '../Button/Button';
import AirPContainer from '../Section/AirPContainer';

export default function App () {
  const [theme, setTheme] = useState('light') ;
  const [animationState, setAnimationState] = useState('close') ;
  const [activeIndex, setActiveIndex] = useState(0) ;

  return (
    <div id='root' className={theme}>
      <Header theme={theme} changeTheme={setTheme} />
      <main className={animationState + ' ' + theme}>
        <Hero />
        <Section activeIndex={activeIndex} animationState={animationState} changeIndex={setActiveIndex} />
        <AirPContainer animationState={animationState} activeIndex={activeIndex} />
      </main>
      <Button animationState={animationState} changeAnimationState={setAnimationState} />
    </div>
  )
}