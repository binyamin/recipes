import { defineConfig } from '@sugarcube-sh/cli';

export default defineConfig({
	output: {
		layers: {
			variables: 'base',
			utilities: 'utility',
		},
	},
});
