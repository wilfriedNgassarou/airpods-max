export default function Item({index, path, title, isActive = false}) {
  return (
    <div data-index={index} className={`item ${isActive && 'active'}`}>
        <div className="bg"></div>
        <div className="img-container">
          <div className="air">
            <img src={`/assets/navigation/${path}.png`} alt={`${path} AirPods`} />
          </div>
          <div className="finish">
            <img src={`/assets/finish/${path}.svg`} alt={`${path} Finish`} />
            <h5>
              { title }
            </h5>
          </div>
        </div>
      </div>
  )
}