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
  tick: '&#xe904;',
  arrowDown: '&#xe900;',
  arrowRight: '&#xe901;',
  error: '&#xe902;',
  link: '&#xe903;',
};

export const sizes = {
  small: '12px',
  mapWidth: 1160,
  svg: '16px',
  panelImage_1: '105px',
  panelImage_2: '95px',
  panelImage_3: '75px',
};

export const separator = {
  vertical: 'linear-gradient(to bottom, rgba(243, 244, 249, 0), rgba(227, 230, 240, .92) 26%, #e2e5f0 77%, rgba(232, 234, 243, 0))',
  horizontal: 'linear-gradient(to left, rgba(243, 244, 249, 0), rgba(227, 230, 240, .92) 26%, #e2e5f0 77%, rgba(232, 234, 243, 0))',
};

export const transitions = {
  default: 'all .25s ease',
  background: 'background-color .3s ease',
  button: 'all .2s ease-out',
  opacity: 'opacity .5s ease',
  width: 'width .5s ease',
  transform: 'transform .5s linear',
  color: 'color .25s ease',
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
  buttonBlue: '0 5px 20px 0 rgba(2, 228, 179, .4)',
  buttonRed: '0 5px 20px 0 rgba(255, 84, 154, .4)',
  panelBoxShadow_1: '0 20px 30px 0 rgba(255, 234, 100, .5)',
  panelBoxShadow_2: '0 20px 30px 0 rgba(160, 255, 89, .5)',
  panelBoxShadow_3: '0 20px 30px 0 rgba(119, 242, 255, .5)',
  tableRow: '0 2px 10px 0 rgba(193, 216, 246, .5)',
};

export const contentWrap = {
  position: 'relative',
  width: '100%',
  maxWidth: '860px',
  margin: '0 auto',
  padding: '0 20px',
  [breakpoints.mobile]: {
    padding: '0 10px',
  },
};

export const timeouts = {
  default: 300,
};
