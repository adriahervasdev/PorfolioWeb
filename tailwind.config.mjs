import defaultTheme from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'accent': withOpacity('--accent'),
        'secondary': withOpacity('--secondary'),
        'accent-bg': withOpacity('--accent-bg'),
        'accent-header': withOpacity('--accent-header'),
        'primary-logo': withOpacity('primary-logo'),
        'secondary-logo': withOpacity('--secondary-logo'),
      },
      float: {
        'brightness': '--brightness',
        'contrast': '--contrast',
        'saturate': '--saturate',
        'blur': '--blur',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
