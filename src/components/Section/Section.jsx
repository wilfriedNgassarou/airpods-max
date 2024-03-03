import BtnNavigation from "./BtnNavigation";
import TextContainer from "./TextContainer";

export default function Section ({changeIndex, animationState, activeIndex}) {
  return (
    <section className="section">
      <TextContainer changeIndex={changeIndex} />
      <BtnNavigation activeIndex={activeIndex} animationState = {animationState}    />
    </section>
  )
}