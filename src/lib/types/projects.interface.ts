export interface Project {
    name: string;
    description: string;
    category: Category;
    image: string | null;
    status: 'active' | 'on hold' | 'deprecated' | 'work in progress'
    chips: Chip[];
}

export enum Category {
    website = 'website',
    bot = 'discord bot',
    data = 'data',
    template = 'template',
    tool = 'tool',
}

export interface Chip {
    type: ChipType;
    link?: string;
    text?: string;
}

export type ChipType = 'link' | 'text' | 'github';