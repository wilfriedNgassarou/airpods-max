export default function BtnNavigation({activeIndex, animationState}) {
  let className ;

  if(activeIndex == 0) {
  className = 'next' ; 
  } else if(activeIndex == 1) {
    className = 'prev-next' ;
  } else if (activeIndex == 2) {
    className = 'prev'
  }

  function handleClick(e) {
    console.log(e.target);
    
    if(!e.target.closest('.span')) return ;

    const target = e.target.closest('.span');
    const action = target.dataset.action ;

    console.log(action);
  }

  return (
    <div onClick={handleClick} className={`btn-navigation ${className}`}>
      <span data-action="prev" className="span">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M16.5003 29.922C24.0119 29.922 30.1012 23.8326 30.1012 16.321C30.1012 8.80947 24.0119 2.72013 16.5003 2.72013C8.98875 2.72012 2.89941 8.80946 2.89941 16.321C2.89941 23.8326 8.98875 29.922 16.5003 29.922Z" fill="white"/>
          <path d="M18.2138 22.1422C17.9554 22.1422 17.697 22.047 17.4929 21.843L12.6918 17.0419C12.2974 16.6475 12.2974 15.9946 12.6918 15.6002L17.4929 10.7991C17.8874 10.4046 18.5402 10.4046 18.9346 10.7991C19.3291 11.1935 19.3291 11.8463 18.9346 12.2408L14.8544 16.321L18.9346 20.4013C19.3291 20.7957 19.3291 21.4486 18.9346 21.843C18.7442 22.047 18.4858 22.1422 18.2138 22.1422Z" fill="white"/>
        </svg>
      </span>
      <span data-action = { activeIndex == 3 ? 'prev' : 'next' } className="span">
        <span>Suivant</span>
        <span>Précédent</span>
        <span className="svg-container">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M16.4997 2.72014C8.98809 2.72014 2.89875 8.80948 2.89875 16.3211C2.89875 23.8326 8.98809 29.922 16.4997 29.922C24.0112 29.922 30.1006 23.8326 30.1006 16.3211C30.1006 8.80948 24.0113 2.72015 16.4997 2.72014Z" fill="white"/>
            <path d="M14.7862 10.4999C15.0446 10.4999 15.303 10.5951 15.5071 10.7991L20.3082 15.6002C20.7026 15.9946 20.7026 16.6475 20.3082 17.0419L15.5071 21.843C15.1126 22.2375 14.4598 22.2375 14.0654 21.843C13.6709 21.4486 13.6709 20.7958 14.0654 20.4013L18.1456 16.3211L14.0654 12.2408C13.6709 11.8464 13.6709 11.1935 14.0654 10.7991C14.2558 10.5951 14.5142 10.4999 14.7862 10.4999Z" fill="white"/>
          </svg>
        </span>
      </span>
    </div>
  )
}