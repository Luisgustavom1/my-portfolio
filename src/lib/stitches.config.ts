import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white100: "rgb(251, 251, 250)",
      white700: "rgb(255, 255, 255)",
      gray: "rgb(233, 233, 231)",
      primary: "rgb(55, 53, 47)",
      primary100: "rgba(55, 53, 47, 0.85)",
      primary200: "rgba(55, 53, 47, 0.65)",
      primary300: "rgba(55, 53, 47, 0.45)",
      primary600: "rgba(55, 53, 47, 0.16)",
      primary700: "rgba(55, 53, 47, 0.08)",
      blue: "rgb(0, 117, 211)",
      red: "rgb(235, 87, 87)",
      focus: "rgb(35, 131, 226)",
    },
    space: {
      ...Object.fromEntries(
        Array(96)
          .fill("")
          .map((_, i) => [i + 1, `${(i + 1) * 4}px`]),
      ),
    },
    fonts: {
      default: "ui-sans-serif, Helvetica",
    },
    sizes: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    radii: {
      sm: "3px",
      md: "4px",
      lg: "12px",
      xlg: "32px",
    },
    transitions: {
      default: "all 20ms ease-in",
      drawer: "all 250ms ease-in",
    },
  },
});

globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$default",
  },
  "html, body": {
    height: "100%",
  },
  "img, svg": {
    userSelect: "none",
  },
  "ul, li, ol": {
    textDecoration: "none",
    listStyle: "none",
  },
})();
