import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "EcoDelivery"
    }
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ['~/assets/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["nuxt-lucide-icons"],

  lucide: {
    namePrefix: 'Icon'
  }
});