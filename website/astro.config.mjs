// @ts-check
import { defineConfig } from 'astro/config';

// In GitHub Actions build, set base subpath for GitHub Pages project repo; in local dev, use default '/'
const base = process.env.GITHUB_ACTIONS ? '/globsol.co.in/' : '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://vishwas-r.github.io',
  base: base,
});
