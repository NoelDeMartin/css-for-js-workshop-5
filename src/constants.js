export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 950,
  desktopMin: 1300,
};

export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
