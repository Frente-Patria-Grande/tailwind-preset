const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Graphik', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'ah-blue': {
                    50: '#effaff',
                    100: '#def3ff',
                    200: '#b6eaff',
                    300: '#75dbff',
                    400: '#2ccaff',
                    500: '#00b6fa',
                    600: '#0090d4',
                    700: '#0073ab',
                    800: '#00608d',
                    900: '#065074',
                    950: '#04334d',
                },
                'ah-yellow': {
                    50: '#ffffea',
                    100: '#fffdc5',
                    200: '#fffc85',
                    300: '#fff346',
                    400: '#ffe61b',
                    500: '#fbc400',
                    600: '#e29b00',
                    700: '#bb6e02',
                    800: '#985508',
                    900: '#7c450b',
                    950: '#482400',
                },
                'ah-gray': {
                    50: '#f9fafa',
                    100: '#f3f4f4',
                    200: '#e6e7e8',
                    300: '#d1d5d6',
                    400: '#b5bbbd',
                    500: '#969c9f',
                    600: '#7e8588',
                    700: '#61676a',
                    800: '#515557',
                    900: '#45484a',
                    950: '#27292b',
                },
                'ah-red': {
                    50: '#fcf5f4',
                    100: '#fae8e6',
                    200: '#f6d5d2',
                    300: '#efb7b2',
                    400: '#e48d85',
                    500: '#d6675d',
                    600: '#c4544a',
                    700: '#a23c33',
                    800: '#86352e',
                    900: '#70322c',
                    950: '#3c1613',
                },
            },
        }
    },
    plugins: [],
}