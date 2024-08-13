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
        textBold: ['"TitilliumWeb SemiBold"', "sans-serif"], // Bold text
        heading: ['"TitilliumWeb Bold"', "sans-serif"], // Main headings (h1)
        subheading: ['"TitilliumWeb SemiBold"', "sans-serif"], // Subheadings (h2)
        linkText: ['"TitilliumWeb SemiBold"', "sans-serif"], // Links
        ui: ['"TitilliumWeb SemiBold"', "sans-serif"], // UI elements like buttons, inputs
      },
    },
  },
  plugins: [],
};
