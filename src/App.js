
// import ColorBox from "./components/ColorBox";
import ColorBoxGrid from "./components/ColorBoxGrid";

export default function App() {

  const colors=[
    "red",
    "blue",
    "orange",
    "magenta",
    "green",
    "black",
    "brown",
    "pink",
    "yellow",
    "turquoise"];

  return (
    <div className="ColorBoxGrid App">
      <ColorBoxGrid colors={colors}/>
     </div>
  );
}
