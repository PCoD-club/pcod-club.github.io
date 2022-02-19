import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  meta: {
    title: "Psychedelic Club of Denver",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The Psychedelic Club of Denver is a harm reduction, substance education, and integration community in Denver, CO.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  buildModules: ["@nuxtjs/tailwindcss"],
});
