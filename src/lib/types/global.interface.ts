export interface GraveyardProject {
    title: string;
    description: string;
    type: 'website' | 'bot' | 'other';
    tags: string[];
    image?: string;
    killed?: boolean;
    group?: string[];
}

export interface Link {
    name: string;
    url: string;
    username: string;
}

/*
    The API URLs have been left out. Too many to include here, can't be bothered. I added "[key: string]: any" for this reason.
*/
export interface Repo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: License | null;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: false;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    [key: string]: any;
}

interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    type: string;
    site_admin: boolean;
}

interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}