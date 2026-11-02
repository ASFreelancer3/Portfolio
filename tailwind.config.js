/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E7B85C',
          DEFAULT: '#C58A2B',
          dark: '#966019',
        },
        brown: {
          deep: '#2B1708',
          dark: '#1B1008',
        },
        surface: {
          ivory: '#FFF9F0',
          cream: '#F6EBDD',
          white: '#FFFFFF',
        },
        ink: {
          main: '#291B12',
          secondary: '#78695B',
          light: '#A39587',
        },
        accent: {
          border: '#E9D9C3',
          borderDark: '#3A2718',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(43, 23, 8, 0.05)',
        'card': '0 10px 30px -5px rgba(43, 23, 8, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(197, 138, 43, 0.15)',
        'gold-glow': '0 0 30px rgba(197, 138, 43, 0.25)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      }
    },
  },
  plugins: [],
}
