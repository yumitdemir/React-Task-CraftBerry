/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#9F3419',
                'typography-dark': '#1F221F',
                'typography-light': '#7C7E7C',
                'typography-white': '#FDFEFD',
                'yellow': '#F9D34D',
                'light-gray': '#CBC8C9',

            },
        },
    },
    plugins: [],
}