export const colors = {
  white: '#fff',
  black: '#000',
  black85: 'rgba(0, 0, 0, .85)',
  borderGrey: '#d9dadf',
  lightGrey: '#bdbdbd',
  formGrey: '#e8e9ea',
  headingGrey: '#6e767d',
  veryDarkGrey: '#202833',
  darkGrey: '#4c555c',
  accentYellow: '#fec43b',
  dangerRed: '#d0021b',
};

export const gradients = {
  button: 'linear-gradient(to right, #e5b33e, #fec43b)',
};

export const fonts = {
  default: 'Open Sans',
  types: {
    normal: '400',
    semibold: '600',
  },
};

export const icons = {
  arrowRight: '&#xe900;',
  close: '&#xe901;',
  cog: '&#xe902;',
  facebook: '&#xe903;',
  instagram: '&#xe904;',
  logo: '&#xe905;',
  pinterest: '&#xe906;',
  tumblr: '&#xe907;',
  twitter: '&#xe908;',
};

export const sizes = {
  small: '12px',
};

export const transitions = {
  default: 'all .25s ease',
};

const breakpointsValues = {
  mobileValue: 859,
  desktopValue: 860,
};

export const breakpoints = {
  ...breakpointsValues,
  mobile: `@media screen and (max-width: ${breakpointsValues.mobileValue}px)`,
  desktop: `@media screen and (min-width: ${breakpointsValues.desktopValue}px)`,
};

export const shadows = {
  popup: '0 2px 7px 0 rgba(0, 0, 0, 0.15)',
};

export const h2 = {
  fontSize: '20px',
  margin: '0 0 28px',
  color: colors.headingGrey,
};
