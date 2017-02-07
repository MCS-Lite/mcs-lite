import { theme } from 'mcs-lite-theme';

const mobileTheme = {
  ...theme,
  base: {
    ...theme.base,
    fontSize: '14px',
    inputHeight: '40px',
  },
  fontSize: {
    small: '85.7%', // = 12px;
    p: '1rem',
    h6: '1rem',
    h5: '1rem',     // = 14px;
    h4: '1.14rem',
    h3: '1.14rem',  // = 16px;
    h2: '1.43rem',
    h1: '1.43rem',  // = 20px;
  },
};

export default mobileTheme;
