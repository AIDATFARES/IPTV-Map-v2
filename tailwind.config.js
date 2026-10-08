/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00E599',
          'primary-hover': '#00C885',
          'primary-light': '#34EEAA',
          'primary-dark': '#059669',
          secondary: '#3B82F6',
          'secondary-light': '#60A5FA',
          accent: '#F59E0B',
          gold: '#FBBF24',
          bg: '#060B12',
          'bg-secondary': '#0B1320',
          'bg-tertiary': '#101C30',
          surface: '#162540',
          'surface-hover': '#1E3154',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-focus': 'rgba(0, 229, 153, 0.45)',
          text: '#FFFFFF',
          'text-secondary': '#E2E8F0',
          'text-muted': '#94A3B8',
          whatsapp: '#25D366',
          'whatsapp-hover': '#20BD5A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(0, 229, 153, 0.35)',
        'glow-primary-lg': '0 0 45px rgba(0, 229, 153, 0.5)',
        'glow-secondary': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'glow-card-hover': '0 20px 40px -15px rgba(0, 229, 153, 0.2), 0 0 0 1px rgba(0, 229, 153, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 229, 153, 0.16) 0%, rgba(59, 130, 246, 0.1) 45%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
