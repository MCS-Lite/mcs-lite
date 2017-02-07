import { theme } from 'mcs-lite-theme';

const mobileTheme = {
  ...theme,
  base: {
    ...theme.base,
    fontSize: '14px',
    inputHeight: '40px',
  },
  fontSize: {
    small: '85.7%',
    p: '1rem',
    h6: '1rem',
    h5: '1rem',
    h4: '1.15rem',
    h3: '1.38rem',
    h2: '1.69rem',
    h1: '2.46rem',
  },
};

export default mobileTheme;
