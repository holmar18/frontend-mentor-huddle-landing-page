import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "hsl(var(--primary-pink))",
        lightPink: "hsl(var(--primary-light-pink))",
        lightRed: "hsl(var(--primary-light-red))",
        darkcyan: "hsl(var(--neutral-Dark-Cyan))",
        paleblue: "hsl(var(--neutral-Pale-Blue))",
      },
      screens: {
        sm: {min: "250px", max: "375px"},
        md: {min: "376px"},
      },
      fontWeight: {
        sm: "var(--weight-light)",
        md: "var(--weight-medium)",
        xl: "var(--weight-heavy)",
      },
      fontFamily: {
        headers: "var(--heading-font)",
        body: "var(--body-font)",
      },
      minWidth: {
        mobile: "var(--screen-mobile)",
      },
      keyframes: {
        scaleRotate: {
          "0%": {transform: "scale(1) rotate(0)"},
          "25%": {transform: "scale(1.02) rotate(0)"},
          "50%": {transform: "scale(1) rotate(1deg)"},
          "75%": {transform: "scale(1.01) rotate(-0.5deg)"},
          "100%": {transform: "scale(1) rotate(0deg)"},
        },
        fade: {
          "0%": {opacity: "0"},
          "10%": {opacity: ".1"},
          "20%": {opacity: ".2"},
          "30%": {opacity: ".3"},
          "40%": {opacity: ".4"},
          "50%": {opacity: ".5"},
          "60%": {opacity: ".6"},
          "70%": {opacity: ".7"},
          "80%": {opacity: ".8"},
          "90%": {opacity: ".9"},
          "100%": {opacity: "1"},
        },
      },
      animation: {
        scaleRotate: "scaleRotate 2.5s ease-in-out 2",
        fade: "fade 3s ease-in-out 1",
      },
      backgroundImage: {
        blueCurveTopDesktop: "url(/assets/bg-section-top-desktop-1.svg)",
        blueCurveBotDesktop: "url(/assets/bg-section-bottom-desktop-1.svg)",
        blueCurveTopMobile: "url(/assets/bg-section-top-mobile-1.svg)",
        blueCurveBotMobile: "url(/assets/bg-section-bottom-mobile-1.svg)",

        blueCurveTopDesktopSc: "url(/assets/bg-section-top-desktop-2.svg)",
        blueCurveBotDesktopSc: "url(/assets/bg-section-bottom-desktop-2.svg)",
        blueCurveTopMobileSc: "url(/assets/bg-section-top-mobile-2.svg)",
        blueCurveBotMobileSc: "url(/assets/bg-section-bottom-mobile-2.svg)",

        footerTopDesktop: "url(/assets/bg-footer-top-desktop.svg)",
        footerTopMobile: "url(/assets/bg-footer-top-mobile.svg)",
      },
    },
  },
  plugins: [],
};
export default config;

