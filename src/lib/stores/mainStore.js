import { writable } from 'svelte/store';

export const storageKey = 'theme-preference';
export const theme = writable('');
export const firstLoad = writable(true);