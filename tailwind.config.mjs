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

      fontSize: {
        // Tamaños para dispositivos grandes (escritorio)
        'title-lg': ['40px', '1.2'], // Título principal
        'subtitle-lg': ['24px', '1.4'], // Subtítulos
        'body-lg': ['18px', '1.6'], // Texto normal
        'note-lg': ['14px', '1.6'], // Notas o texto secundario

        // Tamaños para dispositivos pequeños (móviles)
        'title-sm': ['28px', '1.2'], // Título principal
        'subtitle-sm': ['20px', '1.4'], // Subtítulos
        'body-sm': ['16px', '1.6'], // Texto normal
        'note-sm': ['14px', '1.6'], // Notas o texto secundario
      },

      backgroundImage: {
        backgroundWhite: 'bg-white bg-opacity-40 backdrop-saturate-[180%] backdrop-blur-[20px]',
        backgroundDark:
          'dark:bg-gray-900 dark:bg-opacity-40 dark:backdrop-saturate-[180%] dark:backdrop-blur-[20px]',
      },
    },
  },
  plugins: [],
};
