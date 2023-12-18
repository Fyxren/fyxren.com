import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const pkg = require('./package.json');

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	define: {
		__PACKAGE__: JSON.stringify(pkg)
	}
});
