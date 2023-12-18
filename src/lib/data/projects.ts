import { Category, type Project } from '$lib/types/projects.interface';

export default [
	{
		name: 'Fyxren.com',
		description: '✨ • My personal little corner on the world wide web',
		category: Category.website,
		image: null,
		status: 'active',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/fyxren/fyxren.com'
			}
		]
	},
	{
		name: 'PianoPapers',
		description: '🎹 • A personal use, private piano sheet collection.',
		category: Category.website,
		image: null,
		status: 'work in progress',
		chips: []
	},
	{
		name: 'McData',
		description: '🧊 • The McData Discord bot. Get information about Minecraft, players & more.',
		category: Category.bot,
		image: null,
		status: 'on hold',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/McData-Development/mcdata'
			}
		]
	},
	{
		name: 'Discord.js V14 Handler',
		description:
			'🤖 • A Discord.js (/) command, event, permissions & cooldowns handler for Discord.js V14.',
		category: Category.template,
		image: null,
		status: 'on hold',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/Fyxren/discord.js-v14-handler'
			}
		]
	},
	{
		name: 'Snapchat MyData Example',
		description: '👻 • An example of the exported data from Snapchat when requesting your data.',
		category: Category.data,
		image: null,
		status: 'on hold',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/Fyxren/snapchat-mydata-example'
			}
		]
	},
	{
		name: 'E-SEVEN',
		description:
			'🎤 • An (unofficial) website for E-SEVEN. Three friends who have been making music for years.',
		category: Category.website,
		image: null,
		status: 'active',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/Fyxren/e-seven'
			},
			{
				type: 'link',
				link: 'https://e-seven.fyxren.com',
				text: 'website'
			}
		]
	},
	{
		name: 'Kahoot Spammer',
		description: '🎮 • A Kahoot spammer. Spam Kahoot games with this little CLI tool.',
		category: Category.tool,
		image: null,
		status: 'deprecated',
		chips: [
			{
				type: 'github',
				link: 'https://github.com/Fyxren/KahootSpammer'
			},
			{
				type: 'text',
				text: 'Broken >> API changed'
			}
		]
	}
] as Project[];
