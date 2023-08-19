/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        primary: "#625BF7",
        bgColor: "F5F5F5",
        errorMsg : "#FB184E"
      },
    },
  },
  plugins: [],
}

