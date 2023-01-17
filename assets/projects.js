const Projects = [
    {
        name: 'Fyxren.com',
        desc: '✨ My personal website/portfolio. It\'s scuffed, it\'s buggy, but it\'s mine.',
        status: 'active',
        stack: ['JavaScript', 'Next.js', 'TailwindCSS'],
        category: 'Website',
        collab: [],
        links: [
            {
                title: 'Github',
                link: 'https://github.com/Fyxren/fyxren.com'
            }
        ]
    },
    {
        name: 'McData',
        desc: '🧊 A Discord bot with a ton of information about Minecraft. All the (Minecraft) data, that\'s the goal.',
        status: 'active',
        stack: ['JavaScript', 'Discord.js'],
        category: 'Discord Bot',
        collab: [
            {
                name: 'HalloSouf',
                github: 'hallosouf'
            }
        ],
        links: [
            {
                title: 'Invite',
                link: 'https://canary.discord.com/api/oauth2/authorize?client_id=792824373894840361&permissions=274878203904&scope=applications.commands%20bot'
            },
            {
                title: 'McData Github',
                link: 'https://github.com/McData-Development'
            },
            {
                title: 'Twittter',
                link: 'https://twitter.com/mcdata_dev'
            }
        ]
    },
    {
        name: 'Snapchat Data Explorer',
        desc: '👻 Take a dive into your Snapchat data package. See what\'s really inside and view stats.',
        status: 'paused',
        stack: ['JavaScript', 'Next.js', 'TailwindCSS'],
        category: 'Website',
        collab: [],
        links: [
            {
                title: 'Website',
                link: 'https://sde.fyxren.com'
            },
            {
                title: 'Github',
                link: 'https://github.com/Fyxren/Snapchat-Data-Explorer'
            }
        ]
    },
    {
        name: 'Snapchat Data Example',
        desc: '👻 An example of the exported data from Snapchat when requesting your data. Usefull when building something with the Snapchat data package.',
        status: 'active',
        stack: ['Markdown'],
        category: 'Collection',
        collab: [],
        links: [
            {
                title: 'Github',
                link: 'https://github.com/Fyxren/Snapchat-MyData-Example'
            }
        ]
    },
    {
        name: 'Kahoot Spammer',
        desc: '🤐 A little CLI tool to spam Kahoots full with users.',
        status: 'deprecated',
        stack: ['Javascript'],
        category: 'CLI',
        collab: [],
        links: [
            {
                title: 'Github',
                link: 'https://github.com/Fyxren/KahootSpammer'
            }
        ]
    }
];

export default Projects;