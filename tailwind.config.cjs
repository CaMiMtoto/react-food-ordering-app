/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#1e3a8a",
                "secondary": "#3b82f6",
                "danger": "#ef4444",
                "success": "#10b981",
                "warning": "#f59e0b",
                "info": "#3b82f6",
            }
        },
    },
    plugins: [],
    prefix: 'tw-',
    corePlugins: {
        preflight: false,
    },
    important: true,
}