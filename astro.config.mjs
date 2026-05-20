import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    build: {
      // 4 KB'dan küçük tüm CSS'leri ayrı dosya yapmak yerine HTML içine yazar
      assetsInlineLimit: 4096, 
    }
  }
});