import { setCookies, getCookies } from './cookies';


var currentTheme = 'light-mode';

export function initTheme()
{
    var cookieInfo = getCookies('theme');
    currentTheme = (cookieInfo != null) ? cookieInfo : 'light-mode';
    setTheme(currentTheme);
}

export function getTheme()
{
    return currentTheme;
}

export function setTheme(theme)
{
    var previousTheme = (theme == 'light-mode') ? 'dark-mode' : 'light-mode';
    currentTheme = theme;
    setCookies('theme', currentTheme, 7);
    window.document.body.classList.remove(previousTheme);
    window.document.body.classList.add(currentTheme);
}