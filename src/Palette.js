import Card from './Card';

function Palette({ title, palette }) {
  const paletteValues = Object.values(palette);
  const paletteNames = Object.keys(palette);

  return (
    <div className="Palette">
      <h3>{title}</h3>
      <div className="Palette-cards">
        {paletteValues.map((colorCode, index) => (
          <Card
            key={index}
            colorName={paletteNames[index]}
            colorValue={colorCode}
          />
        ))}
      </div>
    </div>
  );
}

export default Palette;
