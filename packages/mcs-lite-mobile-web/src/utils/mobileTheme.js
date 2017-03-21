import { theme } from 'mcs-lite-theme';

const mobileTheme = {
  ...theme,
  base: {
    ...theme.base,
    fontSize: '14px',
  },
  height: {
    normal: '40px',
    small: '25px',
  },
  fontSize: {
    small: '0.857rem', // = 12px;
    p: '1rem',
    h6: '1rem',
    h5: '1rem',     // = 14px;
    h4: '1.14rem',  // = 16px;
    h3: '1.43rem',  // = 20px;
    h2: '1.57rem',  // = 22px;
    h1: '2.14rem',  // = 30px;
  },
};

export default mobileTheme;
