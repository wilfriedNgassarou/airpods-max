import PodNavigation from "./PodNavigation";

export default function TextContainer({changeIndex}) {
  return (
    <div className="text-container">
      <h3>Gravure gratuite</h3>
      <h2>
        AirPods Max <br />
        Since 2019
      </h2>
      <div className="about">
        <span className="amount">629,00 €</span>
        <hr />
        <h5>AppleCare+ pour casques et écouteurs</h5>
        <p>
          Obtenez jusqu’à deux ans de garantie couvrant un nombre illimité de réparations
           relevant de dommages accidentels et une assistance technique supplémentaire** 
        </p>
        <p>
          Inclut la taxe sur les primes d’assurance au taux applicable
        </p>
      </div>
      <PodNavigation changeIndex={changeIndex} />
    </div>
  )
}