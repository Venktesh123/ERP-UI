/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core Incurv ERP palette, sampled from the product screens
        surface: '#F5F6F8',      // app background
        panel: '#FFFFFF',        // cards / panels
        sidebar: '#FFFFFF',      // left nav background
        border: {
          DEFAULT: '#E4E7EC',
          light: '#EDEFF3',
        },
        ink: {
          900: '#111827', // primary heading text
          700: '#344054', // body text
          500: '#667085', // secondary / labels
          400: '#98A2B3', // placeholders
        },
        brand: {
          50: '#EAF2FF',
          100: '#D6E7FF',
          500: '#2F6FED', // sidebar active / primary blue
          600: '#1B57D6', // primary button
          700: '#154BAF',
        },
        danger: '#E4483B',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xxs: ['0.6875rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        panel: '0 1px 2px rgba(16, 24, 40, 0.03)',
      },
      borderRadius: {
        md: '8px',
        lg: '10px',
        xl: '12px',
      },
    },
  },
  plugins: [],
};
