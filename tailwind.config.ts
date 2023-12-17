import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin';
import { hey_there } from './src/hey_there'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			animation: {
				text: 'text 10s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			transitionTimingFunction: {
				'cursor': 'cubic-bezier(0.25, 0.46, 0.45, 0.95)',
			}
		},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					hey_there,
				],
			},
		}),
	],
} satisfies Config;
