import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://local-vegan-kitchen-sustainable-plant-based-eats.example.com',
  integrations: [tailwind()],
  output: 'static',
});