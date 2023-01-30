/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#EE3C2E',
        'black': '#1F2228',
        'black-90': '#363B46',
        'black-80': '#4F5666',
        'black-70': '#636C80',
        'black-60': '#798397',
        'black-50': '#939BAB',
        'black-40': '#ADB3BF',
        'black-30': '#C7CBD4',
        'black-20': '#E1E3E8',
        'black-10': '#F4F4F5',
      },
      fontFamily: {
        'PlusJakartaSans-Light': ['PlusJakartaSans-Light'],
        'PlusJakartaSans-LightItalic': ['PlusJakartaSans-LightItalic'],
        'PlusJakartaSans': ['PlusJakartaSans-Regular'],
        'PlusJakartaSans-Italic': ['PlusJakartaSans-Italic'],
        'PlusJakartaSans-Medium': ['PlusJakartaSans-Medium'],
        'PlusJakartaSans-MediumItalic': ['PlusJakartaSans-MediumItalic'],
        'PlusJakartaSans-SemiBold': ['PlusJakartaSans-SemiBold'],
        'PlusJakartaSans-SemiBoldItalic': ['PlusJakartaSans-SemiBoldItalic'],
        'PlusJakartaSans-Bold': ['PlusJakartaSans-Bold'],
        'PlusJakartaSans-BoldItalic': ['PlusJakartaSans-BoldItalic'],
      }
    },
  },
  plugins: [],
}
