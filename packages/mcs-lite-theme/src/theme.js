// Default as mcs style
const gray = {
  black: '#353630',
  grayBase: '#999A94',
  grayDark: '#D1D2D3',
  grayLight: '#FAFAFA',
  white: '#FFFFFF',
};

export const kind = {
  default: gray.grayLight,
  primary: '#00A1DE',
  success: '#69BE28',
  error: '#F5364E',
  warning: '#F39A1E',
};

const base = {
  bodyBackground: '#F1F2F7',
  // textColor: gray.black,
  fontSize: '14px',
  lineHeight: 1.5,
  inputHeight: '32px',
};

const fontSize = {
  small: '86%',
  p: '1rem',
  h6: '1rem',
  h5: '1rem',
  h4: '1.14rem',
  h3: '1.43rem',
  h2: '1.71rem',
  h1: '2.43rem',
};

export default {
  color: {
    ...gray,
    ...kind,
  },
  base,
  fontSize,
};
