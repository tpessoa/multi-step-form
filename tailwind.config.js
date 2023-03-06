/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('/bg-sidebar-mobile.svg')",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
