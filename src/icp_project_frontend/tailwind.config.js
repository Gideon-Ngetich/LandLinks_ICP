/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,tsx}",
  'icp_project/node_modules/flowbite-react/lib/esm/**/*.js',

]
;
export const theme = {
  extend: {},
};
export const plugins = [
  require('flowbite/plugin'),
];