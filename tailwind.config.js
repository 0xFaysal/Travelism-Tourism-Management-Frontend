/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#5AB2FF",
                    "primary-content": "#ffffff",
                    secondary: "#FEDE3A",
                    "secondary-content": "#000",
                    accent: "#5DEBD7",
                    "accent-content": "#000",
                    neutral: "#222831",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#ffffff",
                    "base-content": "#000000",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#070F2B",
                    "primary-content": "#ffffff",
                    secondary: "#009ADD",
                    "secondary-content": "#ffffff",
                    accent: "#FEDE3A",
                    "accent-content": "#ffff",
                    neutral: "#222831",
                    "neutral-content": "#ffffff",
                    "base-100": "#112D4E",
                    "base-200": "#112D40",
                    "base-content": "#fff",
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};
