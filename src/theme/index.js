export const colors = {
  white: '#fff',
  black: '#000',
};

export const gradients = {
  bubblesWrap: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #f5f5f5)',
};

export const fonts = {
  default: 'Open Sans',
  types: {
    light: '300',
    medium: '500',
    large: '600',
    bold: '700',
    extraBold: '800',
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
