import DefaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Acumin', ...DefaultTheme.fontFamily.sans],
                primary: ['Acumin'],
                secondary: ['Barlow Semi Condensed'],
            },
            colors: {
                'pg-blue': {
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
                'pg-yellow': {
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
                'pg-gray': {
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
                'pg-red': {
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
                'fdhi-blue': {
                    50: '#EBF8FF',
                    100: '#D7F1FE',
                    200: '#AFE2FE',
                    300: '#86D4FD',
                    400: '#5EC5FD',
                    500: '#35B7FC',
                    600: '#049EF1',
                    700: '#0377B5',
                    800: '#024F79',
                    900: '#01283C',
                    950: '#00141E',
                },
                'fdhi-yellow': {
                    50: '#FFFAE6',
                    100: '#FFF5CC',
                    200: '#FFEA99',
                    300: '#FEE067',
                    400: '#FED634',
                    500: '#FBC701',
                    600: '#CBA301',
                    700: '#987A01',
                    800: '#665100',
                    900: '#332900',
                    950: '#191400',
                },
                'fdhi-gray': {
                    50: '#F2F2F3',
                    100: '#E4E6E7',
                    200: '#CDCFD0',
                    300: '#B2B6B8',
                    400: '#989DA0',
                    500: '#7E8588',
                    600: '#646A6D',
                    700: '#4C5052',
                    800: '#333638',
                    900: '#181A1B',
                    950: '#0C0D0D',
                },
            },
        }
    },
    plugins: [],
}