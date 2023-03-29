import { useState } from 'react';

const getCardStyle = (color) => ({
  backgroundColor: color,
});

function Card({ colorName, colorValue }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (copyText) => () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Card">
      <div
        className="Card-swatch"
        style={getCardStyle(colorValue)}
        onClick={handleCopyClick(colorValue.substring(1))}
      >
        <span>{isCopied ? 'Copied!' : ''}</span>
      </div>
      <div onClick={handleCopyClick(colorValue)}>
        <div className="Card-title">{colorName}</div>
        <div>{colorValue}</div>
      </div>
    </div>
  );
}

export default Card;
