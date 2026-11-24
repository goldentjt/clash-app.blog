/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F9F5EC',
          panel: '#FFFCF5',
          light: '#FFFDF9',
          muted: '#F2EAE1',
          accent: '#EBDCCB'
        },
        coffee: {
          DEFAULT: '#79553D',
          dark: '#5C3E2A',
          deep: '#493A30',
          accent: '#B08758',
          light: '#C9A880',
          border: '#E4D8C7',
          subtle: '#F4ECE1'
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace']
      },
      borderRadius: {
        custom: '10px'
      },
      boxShadow: {
        warm: '0 4px 20px -2px rgba(121, 85, 61, 0.08), 0 2px 6px -1px rgba(121, 85, 61, 0.04)',
        'warm-hover': '0 8px 30px -4px rgba(121, 85, 61, 0.14), 0 4px 10px -2px rgba(121, 85, 61, 0.06)'
      }
    },
  },
  plugins: [],
}
