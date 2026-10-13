import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" + HashRouter lets the site run on GitHub Pages without 404s on refresh
export default defineConfig({ base: "./", plugins: [react()] });
