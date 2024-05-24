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
                    primary: "#1CAEE4",
                    "primary-content": "#ffffff",
                    secondary: "#009ADD",
                    "secondary-content": "#ffffff",
                    accent: "#FEDE3A",
                    "accent-content": "#ffffff",
                    neutral: "#222831",
                    "neutral-content": "#ffffff",
                    "base-100": "#f00",
                    "base-200": "#fafb",
                    "base-content": "#137",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#1CAEE4",
                    "primary-content": "#ffffff",
                    secondary: "#009ADD",
                    "secondary-content": "#ffffff",
                    accent: "#FEDE3A",
                    "accent-content": "#ffff",
                    neutral: "#222831",
                    "neutral-content": "#ffffff",
                    "base-100": "#f00",
                    "base-200": "#00ffff",
                    "base-content": "#fff",
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};
