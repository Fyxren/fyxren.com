export interface IRepo {
    owner: string;
    link: string;
    description: string;
    image: string;
    website: string;
    language?: string;
    languageColor?: string;
    stars: number;
    forks: number;
    // Changed 'repo' to 'title'
    repo?: string;
    title?: string;
}