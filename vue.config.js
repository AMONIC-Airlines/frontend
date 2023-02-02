const { defineConfig } = require('@vue/cli-service')
module.exports = {
    pages: {
        home: {
            entry: "./src/pages/home/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "Home",
            chunks: ["chunk-vendors", "chunk-common", "home"],
        },
        booking: {
            entry: "./src/pages/booking/main.js",
            template: "public/index.html",
            filename: "booking.html",
            title: "Booking",
            chunks: ["chunk-vendors", "chunk-common", "booking"],
        },
        register_flight: {
            entry: "./src/pages/register_flight/main.js",
            template: "public/index.html",
            filename: "register_flight.html",
            title: "Register Flight",
            chunks: ["chunk-vendors", "chunk-common", "register_flight"],
        },
        additional_service: {
            entry: "./src/pages/additional_service/main.js",
            template: "public/index.html",
            filename: "additional_service.html",
            title: "Additional Services",
            chunks: ["chunk-vendors", "chunk-common", "additional_service"],
        },
        technical_support: {
            entry: "./src/pages/technical_support/main.js",
            template: "public/index.html",
            filename: "technical_support.html",
            title: "Technical Support",
            chunks: ["chunk-vendors", "chunk-common", "technical_support"]
        }
    },
};