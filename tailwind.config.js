module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,scss}"],
  darkMode: "class", // Enables dark mode by adding a 'dark' class to the <html> or <body>
  theme: {
    extend: {
      colors: {
        // Visual Identity Colors
        primary: "#e63946",
        "primary-dark": "#b82635",

        secondary: "#1d3557",
        "secondary-dark": "#14233b",

        tertiary: "#f1faee",
        "tertiary-dark": "#c1d8ce",

        // Neutral Colors
        neutral: {
          dark: "#131313",
          white: "#ffffff",
          "gray-1": "#fcfcfc",
          "gray-2": "#ECECEC",
          "gray-3": "#d9d9d9",
          "gray-4": "#c3c3c3",
          "gray-5": "#999999",
          inherit: "inherit",
          transparent: "transparent",
        },

        // Semantic Colors
        semantic: {
          info: "#00BBFF",
          alert: "#F4973C",
          danger: "#dc3545",
          success: "#039B00",
          "info-dark": "#0f98ca",
          "alert-dark": "#c96d13",
          "danger-dark": "#c82333",
          "success-dark": "#068303",
        },

        // Colors for Light Mode
        light: {
          text: "#1d3557",
          heading: "#1d3557",
          "text-bold": "#1d3557",
          "button-text": "#ffffff",
          "app-background": "#ffffff",
          "button-background": "#e63946",
          "container-background": "#1d3557",
          "button-background-hover": "#b82635",
        },

        // Colors for Dark Mode
        dark: {
          text: "#ffffff",
          heading: "#ffffff",
          "text-bold": "#ffffff",
          "button-text": "#ffffff",
          "app-background": "#131313",
          "button-background": "#e63946",
          "container-background": "#1d3557",
          "button-background-hover": "#b82635",
        },
      },
      fontFamily: {
        text: ['"TitilliumWeb Regular"', "sans-serif"], // Body text
        "text-bold": ['"TitilliumWeb SemiBold"', "sans-serif"], // Bold/Emphasis text
        heading: ['"TitilliumWeb Bold"', "sans-serif"], // Main headings (h1)
        subheading: ['"TitilliumWeb SemiBold"', "sans-serif"], // Subheadings (h2, h3, etc.)
        "link-text": ['"TitilliumWeb SemiBold"', "sans-serif"], // Links
        ui: ['"TitilliumWeb SemiBold"', "sans-serif"], // UI elements like buttons, inputs
      },
    },
  },
  plugins: [],
};
