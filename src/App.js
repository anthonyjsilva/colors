import "./App.css";
import Palette from "./Palette";

const youtubePalette = {
  blackTextOutline: "#101010",
  red: "#F93838",
  orange: "#F9A538",
  green: "#78F938",
};

const song12345Palette = {
  blackTextOutline: "#101010",
  darkGrayBg: "#2b303a",
  darkGrayPurpleBg: "#363d69",
  medGrayPurpleBg: "#545E9D",
  lightGrayPurpleBg: "#6673C4",

  red: "#f45662",
  green: "#c1ff72",
  blue: "#5ce1e6",
  orange: "#ffbd59",
  pink: "#f881e5",

  purpleExtra: "#d681f8",
};

const palettes = [youtubePalette, song12345Palette];
const paletteNames = ["YouTube Video Palette", "12345 Palette"];

function App() {
  return (
    <div className="App">
      <h1>COLORS</h1>
      {/* {palettes.map((palette, index) => (
        <Palette key={index} title={paletteNames[index]} palette={palette} />
      ))} */}
    </div>
  );
}

export default App;
