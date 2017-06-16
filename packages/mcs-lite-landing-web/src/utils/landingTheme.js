import { theme } from 'mcs-lite-theme';

const landingTheme = {
  ...theme,
  color: {
    ...theme.color,
    black: '#40494D',
    grayBase: '#75868C',
  },
  base: {
    ...theme.base,
    bodyColor: '#40494D',
  },

  fontSize: {
    ...theme.fontSize,
    h2: '1.84rem',
  },
};

export default landingTheme;
