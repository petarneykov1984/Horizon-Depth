export const colors = {
  white: '#fff',
  black: '#000',
  borderGrey: '#d9dadf',
  lightGrey: '#bdbdbd',
  headingGrey: '#6e767d',
  veryDarkGrey: '#202833',
  accentYellow: '#fec43b',
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
};
