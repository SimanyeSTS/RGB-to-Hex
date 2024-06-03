document.querySelector('#convertButton').addEventListener('click', () => {
    const red = parseInt(document.querySelector('#redInput').value);
    const green = parseInt(document.querySelector('#greenInput').value);
    const blue = parseInt(document.querySelector('#blueInput').value);
  
    if (isValidRgbValue(red) && isValidRgbValue(green) && isValidRgbValue(blue)) {
      const hex = rgbToHex(red, green, blue);
      document.querySelector('#result').textContent = `HEX: ${hex}`;
    } else {
      document.querySelector('#result').textContent = 'Invalid RGB values. Please enter values between 0 and 255.';
    }
  });
  
  function isValidRgbValue(value) {
    return value >= 0 && value <= 255 && !isNaN(value);
  }
  
  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  