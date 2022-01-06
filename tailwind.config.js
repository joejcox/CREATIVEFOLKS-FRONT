const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      grey: "hsl(0, 0%, 44%)", // #707070
      "grey--light": "hsla(0, 0%, 44%, 0.08)",
      primary: "hsl(177, 80%, 35%)",
      "primary--hover": "hsl(177, 80%, 30%)",
      secondary: "hsl(359, 78%, 73%)",
      "secondary--hover": "hsl(359, 78%, 68%)",
      dark: "hsl(0, 0%, 20%)", // #333333
    },
    fontFamily: {
      primary: ["Raleway", "sans-serif"],
    },
    extend: {
      borderRadius: {
        main: "53px",
      },
      width: {
        logo: "177px",
        search: "371px",
        button: "218px",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1760px",
        },
      },
      height: {
        header: "248px",
        search: "68px",
        button: "68px",
      },
      spacing: {
        container: "100px",
        button: "50px",
      },
      backgroundImage: {
        banner: "url(/src/assets/images/banner_img.jpg)",
      },
    },
  },
}
