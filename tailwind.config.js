/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'cxl':'3.5rem',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'vina-sans': ['cursive'],
    },
    extend: {
      colors: {
        'git-btn': '#28374C',
        'first-title': '#dff0fa',
        'tag': "#4e4e4e",
        'input': "#8ceac1",
        'second-title':'#819BBB'

        
      },
    },
  },
  plugins: [],
}
