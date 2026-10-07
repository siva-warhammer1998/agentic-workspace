/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9FAFB', // gray-50
        fg: '#111827', // gray-900
        primary: '#2563EB', // blue-600
        'primary-hover': '#1D4ED8', // blue-700
        'primary-foreground': '#FFFFFF',
        secondary: '#F3F4F6', // gray-100
        'secondary-foreground': '#111827', // gray-900
        muted: '#F3F4F6', // gray-100
        'muted-foreground': '#6B7280', // gray-500
        accent: '#2563EB', // blue-600
        'accent-muted': '#E5E7EB', // gray-200
        navy: '#102A43', // deep navy for hero
        destructive: '#DC2626', // red-600
        'destructive-foreground': '#FFFFFF',
        success: '#16A34A', // green-600
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}