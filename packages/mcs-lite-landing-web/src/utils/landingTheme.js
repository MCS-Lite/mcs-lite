import { theme } from 'mcs-lite-theme';

export const BREAKPOINTS = { sm: 768, md: 970, lg: 1170 };

const landingTheme = {
  ...theme,
  color: {
    ...theme.color,
    black: '#40494D',
    grayDark: '#75868C',
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
