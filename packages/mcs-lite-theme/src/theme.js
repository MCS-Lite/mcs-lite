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
  bodyBackgroundColor: '#F1F2F7',
  bodyColor: gray.black,
  fontSize: '13px',
  lineHeight: 1.5,
  inputHeight: '32px',
};

const fontSize = {
  small: '92.3%',
  p: '1rem',
  h6: '1rem',
  h5: '1rem',
  h4: '1.15rem',
  h3: '1.38rem',
  h2: '1.69rem',
  h1: '2.46rem',
};

const mobile = {
  maxWidth: '800px',
  headerHeight: '56px',
};

export default {
  color: {
    ...gray,
    ...kind,
  },
  base,
  fontSize,
  mobile,
};
