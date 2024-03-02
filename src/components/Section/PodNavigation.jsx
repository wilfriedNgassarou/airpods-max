import Item from "./Item";

export default function PodNavigation() {
  return (
    <div className="pod-navigation">
      <Item path={"white"} isActive={true} title={"Argent"} />
      <Item path={"blue"} title={"Blue-ciel"}/>
      <Item path={"pink"} title={"Rose"}/>
      <div className="cursor"></div>
    </div>
  )
}