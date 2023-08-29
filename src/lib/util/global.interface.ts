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

export interface IError {
    id: number;
    header: string;
    message: string;
}

// Lanyard

export interface ILanyardResponse {
    success: boolean;
    data: ILanyardData;
}

export interface ILanyardData {
    spotify: ISpotify;
    listening_to_spotify: boolean;
    kv: any;
    discord_user: IDiscordUser;
    discord_status: string;
    activities: IActivity[];
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_web: boolean;
}

export interface IAssets {
    large_image: string;
    large_text: string;
    small_image?: string;
    small_text?: string;
}

export interface ITimestamps {
    start: number;
    end?: number;
}

export interface IDiscordUser {
    id: string;
    username: string;
    global_name: string;
    display_name: string;
    public_flags: number;
    avatar_decoration_data: any;
}

export interface ISpotify {
    track_id: string;
    timestamps: ITimestamps
    album: string;
    album_art_url: string;
    artist: string
    song: string;
}

export interface IActivity {
    flags?: number;
    id: string;
    name: string;
    type: number;
    state: string;
    session_id?: string;
    details: string;
    timestamps: ITimestamps,
    assets: IAssets;
    buttons: any;
    sync_id?: string;
    created_at: number;
    party: any;
}