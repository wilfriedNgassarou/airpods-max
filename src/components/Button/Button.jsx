export default function Button({animationState, changeAnimationState}) {
  function handleClick() {
    changeAnimationState('middle')
  }

  let style = {opacity: 1, transform: 'translateY(0px)'} ;

  if(animationState == 'open') style.opacity = 0 ;
  if(animationState == 'open') style.transform = 'translateY(100px)' ;
  if(animationState == 'before-open') style.opacity = 0 ;
  if(animationState == 'before-open') style.transform = 'translateY(100px)' ;
  if(animationState == 'middle') style.transform = 'translateY(100px)' ;

  function handleTransitionEnd(e) {
    if(animationState == 'middle') {
      changeAnimationState('before-open')
      
      setTimeout(() => {
        changeAnimationState('open')
        
      }, 100);
    }
  }

  return (
    <div onTransitionEnd={handleTransitionEnd} style={style} className={`button ${animationState}`}>
      <span onClick={handleClick}>
        Suivant 
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M16.4999 2.7204C8.98834 2.7204 2.899 8.80974 2.899 16.3213C2.89899 23.8329 8.98833 29.9222 16.4999 29.9222C24.0115 29.9222 30.1008 23.8329 30.1008 16.3213C30.1008 8.80974 24.0115 2.72041 16.4999 2.7204Z" fill="white"/>
          <path d="M14.7862 10.5002C15.0446 10.5002 15.303 10.5954 15.5071 10.7994L20.3082 15.6005C20.7026 15.9949 20.7026 16.6478 20.3082 17.0422L15.5071 21.8433C15.1126 22.2378 14.4598 22.2378 14.0654 21.8433C13.6709 21.4489 13.6709 20.7961 14.0654 20.4016L18.1456 16.3214L14.0654 12.2411C13.6709 11.8467 13.6709 11.1938 14.0654 10.7994C14.2558 10.5954 14.5142 10.5002 14.7862 10.5002Z" fill="white"/>
        </svg>

      </span>
    </div>
  )
}