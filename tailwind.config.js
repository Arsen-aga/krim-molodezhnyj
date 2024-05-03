module.exports = {
  content: ["./app/*.html", "./app/**/*.svg"],
  theme: {
    screens: {
      xxs: "375px",
      xs: "468px",
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1280px",
      "3xl": "1550px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        xs: "16px",
        sm: "16px",
      },
    },
    fontFamily: {
      "eesti-300":   "GT-Eesti-LC-Display-Light",
      "eesti-400":   "GT-Eesti-LC-Text-Regular",
      "eesti-500":   "GT-Eesti-LC-Display-Medium",
    },
    extend: {
      colors: {
        primary: "#8C64D7",
        accent: "#D9F06A",
        gray: "#C9C9C9",
        azure: "#0077FF",
        "primary-light": "#B78BF7",
        "accent-dark": "#B6CB28",
        "soft-blue": "#6EE3FE",
        "white-transparent": "#ffffff80",
      },
      fontSize: {
        title: [
          "89px",
          {
            lineHeight: "1",
            fontWeight: "500",
          },
        ],
      },
      backgroundImage: {
        "front-bg": "url(../img/icons/front-block.svg)",
      },
      boxShadow: {},
      borderRadius: {},
    },
  },
};
