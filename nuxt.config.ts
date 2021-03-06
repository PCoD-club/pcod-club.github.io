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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&family=Quicksand:wght@300;400;500&display=swap",
      },
    ],
  },

  buildModules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],

  build: {
    transpile: ["luxon"],
  },

  publicRuntimeConfig: {
    MEETUP_GROUP_ID: "23798818",
  },

  privateRuntimeConfig: {
    MEETUP_GQL: "https://api.meetup.com/gql",
  },
});
