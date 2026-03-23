import sugarcube from '@sugarcube-sh/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [sveltekit(), sugarcube(), Icons({ compiler: 'svelte' })],
});
