const theme = {};

theme.palette = {
  primary: '#1A7D87',
  secondary: '#C01439',
  tertiary: '#1A1E1E',
  quaternary: '#B5C6C4',
  light: '#FFFFFF',
  dark: '#000000',
};

theme.sizes = {
  maxContentWidth: '940px',
  contentPadding: '20px 20px',
  borderRadius: '25px;',
  borderRadiusMobile: '15px;',
};

theme.font = {
  default: 'Raleway, Helvetica, Arial',
  sizes: {
    mobile: {
      body: '1rem',
      subtitle1: '1.2rem',
      subtitle2: '1.4rem',
      headline1: '2rem',
      headline2: '2.4rem',
    },
    desktop: {
      body: '1.2rem',
      subtitle1: '1.4rem',
      subtitle2: '1.8rem',
      headline1: '2.2rem',
      headline2: '2.6rem',
    },
  },
};

export default theme;
