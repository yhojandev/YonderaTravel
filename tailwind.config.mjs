/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryGreen: '#2af598', // Color principal verde
        primaryAzure: '#009efd', // Color principal azul
        txtLightPrimary: '#333333', // Texto principal en modo claro
        txtLightSecondary: '#666666', // Texto secundario en modo claro
        txtDarkPrimary: '#E0E0E0', // Texto principal en modo oscuro
        txtDarkSecondary: '#B3B3B3', // Texto secundario en modo oscuro
      },
    },
  },
  plugins: [],
};
