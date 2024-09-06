// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,scss}", // Ensure SCSS files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#187029",
        secondary: "#2d3748",
        tertiary: "#4a5568",
        neutral: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
        },
        semantic: {
          warning: "#f6e05e",
          success: "#48bb78",
          error: "#f56565",
        },
      },
      fontFamily: {
        text: ['"TitilliumWeb Regular"', "sans-serif"], // Body text
        textBold: ['"TitilliumWeb SemiBold"', "sans-serif"], // Bold/Emphasis text
        heading: ['"TitilliumWeb Bold"', "sans-serif"], // Main headings (h1)
        subheading: ['"TitilliumWeb SemiBold"', "sans-serif"], // Subheadings (h2, h3, etc.)
        linkText: ['"TitilliumWeb SemiBold"', "sans-serif"], // Links
        ui: ['"TitilliumWeb SemiBold"', "sans-serif"], // UI elements like buttons, inputs
      },
    },
  },
  plugins: [],
};

/*

const defaultTheme = {
  // Light theme as default
  isInDarkMode: false,
  colors: {
    ...neutralColors,
    ...semanticColors,
    ...visualIdentityColors
  },

  fontFamilies: {
    body: ['"TitilliumWeb Regular"', 'sans-serif'],
    bodyBold: ['"TitilliumWeb SemiBold"', 'sans-serif'],
    heading1: ['"TitilliumWeb Bold"', 'sans-serif'],
    heading2: ['"TitilliumWeb SemiBold"', 'sans-serif'],
    link: ['"TitilliumWeb SemiBold"', 'sans-serif'],
    uiElements: ['"TitilliumWeb SemiBold"', 'sans-serif']
  },
  fontSizesPx: {
    smallest: 12,
    small: 14,
    default: 16,
    large: 18,
    extraLarge: 22,
    huge: 24,
    jumbo: 32,
    biggest: 40
  },
  fontSizes: {
    smallest: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125,
    extraLarge: 1.375,
    huge: 1.5,
    jumbo: 2,
    biggest: 2.5
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },

  lineHeights: {
    small: 1,
    default: 1.2,
    tall: 1.5,
    taller: 1.8,
    big: 2,
    biggest: 2.4
  },

  // Timings 

  transitions: {
    defaultAll: 'all .2s ease',
    defaultTime: '.2s'
  },

  variantColors: {
    // Light theme colors as default
    text: '#221e22',
    heading: '#111111',
    textBold: '#111111',
    buttonText: '#fafafa',
    appBackground: '#fafafa',
    buttonBackground: '#221e22',
    containerBackground: '#dfdfdf'
  }
};

export default defaultTheme;

*/
