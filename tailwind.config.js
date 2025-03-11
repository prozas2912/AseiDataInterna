/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,js,jsx,ts,tsx}"], // Archivos donde Tailwind se aplicará
    theme: {
      extend: {
        colors: {
          primary: {
            100: "#d0f7f7",
            200: "#30b8d3",
            300: "#0088b2",
            400: "#001f4e",
          },
          secondary: {
            100: "#d3d3d3",
            200: "#808080",
          },
          complementary: {
            orange: "#ef5401",
            yellow: "#f08d00",
            green1: "#00987f",
            green2: "#01c19c",
          },
        },
        fontFamily: {
          sans: ["Calibre", "sans-serif"],
          roboto: ["Roboto Slab", "serif"],
        },
      },
    },
    plugins: [],
  };
  