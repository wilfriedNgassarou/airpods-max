
export default function AirPContainer({activeIndex, animationState}) {

  let whiteClassName, blueClassName, pinkClassName ;

  if (animationState == 'open') {

  if(activeIndex == 0) {
    whiteClassName = 'pod-active' ;
    blueClassName = 'bottom' ;
    pinkClassName = 'left' ;
  } else if(activeIndex == 1) {
    whiteClassName = 'top' ;
    blueClassName = 'pod-active' ;
    pinkClassName = 'bottom' ;
    
  } else if (activeIndex == 2) {
    whiteClassName = 'left' ;
    blueClassName = 'top' ;
    pinkClassName = 'pod-active' ;
  }

}

  return (
    <div className="airpods-container">
      <div data-index="0" className={`pod-item ${whiteClassName}`}>
        <img src="/assets/pods/white.png" alt="White Pods" />
      </div>
      <div data-index="1" className={`pod-item ${blueClassName}`}>
        <img src="/assets/pods/blue.png" alt="Blue Pods" />
      </div>
      <div data-index="2" className={`pod-item ${pinkClassName}`}>
        <img src="/assets/pods/pink.png" alt="Pink Pods" />
      </div>
    </div>
  )
}