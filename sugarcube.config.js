import { defineConfig } from '@sugarcube-sh/cli';

export default defineConfig({
	utilities: {
		'font-size': {
			source: 'size.*',
			prefix: 'text',
		},
	},
	output: {
		layers: {
			variables: 'base',
			utilities: 'utility',
		},
	},
});
