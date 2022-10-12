module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#064EA4",
      secondary1: "#E1EDFB",
      secondary2: "#FCDF69",
      secondary3: "#F99D77",
      secondary4: "#7EB7FB",
      neutral: {
        100: "#FFFFFF",
        200: "#F9FAFB",
        300: "#E7EAEE",
        400: "#BECAD7",
        500: "#8096B0",
        600: "#62778F",
        700: "#1E3D60",
        800: "#0F437F",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
      serif: ["Newsreader", "serif"],
    },
    fontSize: {
      xs: ["14px", "1.5em"],
      sm: ["15px", "1.6em"],
      base: ["16px", "1.44em"],
      lg: ["18px", "1.667em"],
      xl: ["20px", "1.5em"],
      xxl: ["22px", "1.5em"],
      "2xl": ["24px", "1.583em"],
      "3xl": ["26px", "1.289em"],
      "4xl": ["32px", "1.289em"],
      "5xl": ["35px", "1.3em"],
      "6xl": ["38px", "1.289em"],
      "7xl": ["42px", "1.3em"],
      "8xl": ["50px", "1.3em"],
      "9xl": ["60px", "1.3em"],
    },
    boxShadow: {
      base: "0 5px 15px 0 rgb(30 61 96 / 3%)",
      dark: "0 15px 15px 0.01px rgba(30, 61, 96, 0.03)",
    },
    extend: {
      aspectRatio: {
        image: "4 / 3",
        "h-image": "3 / 4",
      },
      animation: {
        "bounce-slow": "bounce 10s linear infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 1s linear",
        slideDown: "slideDown linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateX(-50%) " },
          "100%": { transform: "translateX(0%)" },
        },
        fadeOut: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      animation: ["motion-safe"],
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
    ],
  },
};
