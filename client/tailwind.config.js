import flowbite from 'flowbite/plugin'; // Correct import for flowbite plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure correct paths for your project
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add flowbite-react components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Flowbite plugin
    require('tailwind-scrollbar'), // Scrollbar plugin
  ],
};
