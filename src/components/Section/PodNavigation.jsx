import { useRef, useState } from "react";
import Item from "./Item";

export default function PodNavigation({changeIndex}) {
  const [activeIndex, setActiveIndex] = useState(0) ;
  const navigationRef = useRef(null) ;
  const cursorRef = useRef(null)

  function handleClick(e) {
    if(!e.target.closest('.item')) return ;

    const target = e.target.closest('.item') ;
    const index = target.dataset.index ;

    const cursorStyles = getComputedStyle(cursorRef.current) ;
    const width = parseInt(cursorStyles.width) ;

    cursorRef.current.style.transform = `translate(${(index * width) + (index * 15)}px)`


    if(activeIndex == 0  && index == 2) {
      changeIndex(1)      
      setActiveIndex(2);
      
      setTimeout(() => {
        changeIndex(2)   
      }, 350);
      
      return 
    } else if (activeIndex == 2 && index == 0) {
      
      changeIndex(1)
      
      setTimeout(() => {
        changeIndex(0)
        setActiveIndex(0)
      }, 350);

      return 
    }

    setActiveIndex(index)
    changeIndex(index)
  }

  return (
    <div onClick={handleClick} ref={navigationRef} className="pod-navigation">
      <Item 
        index={0}
        path={"white"} 
        isActive={activeIndex == 0} 
        title={"Argent"} 
      />
      <Item 
        index={1}
        path={"blue"} 
        isActive={activeIndex == 1} 
        title={"Blue-ciel"}
      />
      <Item 
        index={2}
        path={"pink"} 
        isActive={activeIndex == 2} 
        title={"Rose"}
      />
      <div ref={cursorRef} className="cursor"></div>
    </div>
  )
}