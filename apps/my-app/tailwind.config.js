/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@fe-free/core/src/tailwind.config')],
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    '../../packages/*/src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@fe-free/core/src/**/*.{html,js,jsx,ts,tsx}',
  ],
};
