/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      theme: {
        light: "#f2f2e6",
				dark: "#07020a"
      },
      crystalCut: {
        50: "#f9f8f2",
        100: "#fffffc",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#f9f2ed",
        600: "#dbc2ba",
        700: "#b1807d",
        800: "#7e444e",
        900: "#46182b",
      },
      megaman: {
        50: "#fad7f5",
        100: "#f8c6ff",
        200: "#c09bff",
        300: "#747bff",
        400: "#5395ff",
        500: "#3ab0ff",
        600: "#25a7e1",
        700: "#1882b6",
        800: "#105082",
        900: "#0a2048",
      },
      peanutButterChicken: {
        50: "#faf8dd",
        100: "#fffbd1",
        200: "#fff3b1",
        300: "#ffe794",
        400: "#ffd279",
        500: "#ffb562",
        600: "#e17d46",
        700: "#b6432f",
        800: "#821c24",
        900: "#480d21",
      },
      georgiaPeach: {
        50: "#f9efdf",
        100: "#ffeed8",
        200: "#ffdabe",
        300: "#ffbfa4",
        400: "#ff9e8d",
        500: "#f87474",
        600: "#da566b",
        700: "#b03960",
        800: "#7e2150",
        900: "#450e34",
      }
    }
  },
  plugins: [],
}
