// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const hey_there: CustomThemeConfig = {
	name: 'hey_there',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "var(--color-surface-50)",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #25a1ef 
		"--color-primary-50": "222 241 253", // #def1fd
		"--color-primary-100": "211 236 252", // #d3ecfc
		"--color-primary-200": "201 232 251", // #c9e8fb
		"--color-primary-300": "168 217 249", // #a8d9f9
		"--color-primary-400": "102 189 244", // #66bdf4
		"--color-primary-500": "37 161 239", // #25a1ef
		"--color-primary-600": "33 145 215", // #2191d7
		"--color-primary-700": "28 121 179", // #1c79b3
		"--color-primary-800": "22 97 143", // #16618f
		"--color-primary-900": "18 79 117", // #124f75
		// secondary | #ec6dfd 
		"--color-secondary-50": "252 233 255", // #fce9ff
		"--color-secondary-100": "251 226 255", // #fbe2ff
		"--color-secondary-200": "250 219 255", // #fadbff
		"--color-secondary-300": "247 197 254", // #f7c5fe
		"--color-secondary-400": "242 153 254", // #f299fe
		"--color-secondary-500": "236 109 253", // #ec6dfd
		"--color-secondary-600": "212 98 228", // #d462e4
		"--color-secondary-700": "177 82 190", // #b152be
		"--color-secondary-800": "142 65 152", // #8e4198
		"--color-secondary-900": "116 53 124", // #74357c
		// tertiary | #6a1ec8 
		"--color-tertiary-50": "233 221 247", // #e9ddf7
		"--color-tertiary-100": "225 210 244", // #e1d2f4
		"--color-tertiary-200": "218 199 241", // #dac7f1
		"--color-tertiary-300": "195 165 233", // #c3a5e9
		"--color-tertiary-400": "151 98 217", // #9762d9
		"--color-tertiary-500": "106 30 200", // #6a1ec8
		"--color-tertiary-600": "95 27 180", // #5f1bb4
		"--color-tertiary-700": "80 23 150", // #501796
		"--color-tertiary-800": "64 18 120", // #401278
		"--color-tertiary-900": "52 15 98", // #340f62
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #140c27 
		"--color-surface-50": "220 219 223", // #dcdbdf
		"--color-surface-100": "208 206 212", // #d0ced4
		"--color-surface-200": "196 194 201", // #c4c2c9
		"--color-surface-300": "161 158 169", // #a19ea9
		"--color-surface-400": "91 85 104", // #5b5568
		"--color-surface-500": "20 12 39", // #140c27
		"--color-surface-600": "18 11 35", // #120b23
		"--color-surface-700": "15 9 29", // #0f091d
		"--color-surface-800": "12 7 23", // #0c0717
		"--color-surface-900": "10 6 19", // #0a0613

	}
}