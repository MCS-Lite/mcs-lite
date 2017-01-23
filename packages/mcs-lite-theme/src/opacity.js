import { color } from 'd3-color';

const opacity = k => (specifier) => {
  const newColor = color(specifier);
  newColor.opacity = k;

  return newColor.toString();
};

export default opacity;
