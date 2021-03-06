import { writable } from 'svelte/store';

export const storageKey = 'theme-preference';
export const theme = writable('');
export const firstLoad = writable(true);
export const duration = 400;
export const windowWidth = writable(0);
export const windowHeight = writable(0);