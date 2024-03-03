import TextContainer from "./TextContainer";

export default function Section ({activeIndex, changeIndex}) {
  return (
    <section className="section">
      <TextContainer activeIndex={activeIndex} changeIndex={changeIndex} />
    </section>
  )
}