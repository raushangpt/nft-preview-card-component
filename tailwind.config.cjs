/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            'white': 'hsl(0, 0%, 100%)',
            'cyan': 'hsl(178, 100%, 50%)',
            'blue-100': 'hsl(215, 51%, 70%)',
            'blue-200': 'hsl(215, 32%, 27%)',
            'blue-300': 'hsl(216, 50%, 16%)',
            'blue-400': 'hsl(217, 54%, 11%)',
        },
        fontFamily: {
            'outfit': ['Outfit', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
