/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    content: [
        "./src/**/*.{js,jsx,ts,tsx,css}",
        "./src/components/**/*.{js,jsx,ts,tsx,css}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

