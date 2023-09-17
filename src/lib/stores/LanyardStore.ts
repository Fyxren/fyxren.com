import { readable } from 'svelte/store';

const fetchLanyard = async () => {
    const json = await fetch('https://api.lanyard.rest/v1/users/462914535351779328').then((r) => r.json());
    return json;
};

const LanyardData = readable(fetchLanyard());
export default LanyardData;