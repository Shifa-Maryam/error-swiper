/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                urbanist: 'Urbanist',
            },

            colors: {
                primary: '#158073',
                text: '#1C1C1C',
                desc: '#444444',
                hover: '#045F54',
            },
        },
    },
    plugins: [],
};
