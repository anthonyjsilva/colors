import './App.css';
import Palette from './Palette';

const portfolioPalette = {
  'color-primary': '#18a7ff',
  'color-secondary': '#fafafa',
  'color-accent': '#0b4c73',
  'color-text': '#4e4e4e',
  'bg-color-primary': '#3a3a3a',
  'bg-color-secondary': 'lightgray',
};

const dspyPalette = {
  blackBackground: '#101010',
  blue: '#46E1F9',
};

const youtubePalette = {
  blackTextOutline: '#101010',
  red: '#F93838',
  orange: '#F9A538',
  yellow: '#FFDE59',
  green: '#78F938',
};

const song12345Palette = {
  blackTextOutline: '#101010',
  darkGrayBg: '#2b303a',
  darkGrayPurpleBg: '#363d69',
  medGrayPurpleBg: '#545E9D',
  lightGrayPurpleBg: '#6673C4',

  red: '#f45662',
  green: '#c1ff72',
  blue: '#5ce1e6',
  orange: '#ffbd59',
  pink: '#f881e5',

  purpleExtra: '#d681f8',
};

const justDoItPalette = {
  bgColor: '#efe9d4',
  headingColor: '#6d6a64',
  white: ' white',
  dark: '#5d5555',
  shadow: '#6c6c6ca3',
  checked: '#7d7474',
  noteColorRed: '#e67a7a',
  noteColorOrange: '#ecbc64',
  noteColorYellow: '#e6e46c',
  noteColorGreen: '#75df75',
  noteColorBlue: '#68dcdc',
  noteColorPurple: '#c675df',
  transparent: 'rgba(60, 60, 60, .1)',
};

const paletteNames = [
  'Portfolio',
  'DSPY',
  'YouTube Video',
  '12345',
  'Just Do It',
];

const palettes = [
  portfolioPalette,
  dspyPalette,
  youtubePalette,
  song12345Palette,
  justDoItPalette,
];

function App() {
  return (
    <div className="App">
      <h1>
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>S</span>
      </h1>

      <h2>A collection of color palettes</h2>
      {palettes.map((palette, index) => (
        <Palette
          key={paletteNames}
          title={`${paletteNames[index]} Palette`}
          palette={palette}
        />
      ))}
    </div>
  );
}

export default App;
