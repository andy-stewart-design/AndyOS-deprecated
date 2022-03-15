const storageKey = 'theme-preference';

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme);
    reflectPreference();
}

const reflectPreference = () => {
    const html = document.firstElementChild;
    html.classList.add(theme);
}

const theme = getColorPreference();
setPreference();