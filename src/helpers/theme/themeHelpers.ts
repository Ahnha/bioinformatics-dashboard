export const switchTheme = (themeName: string): void => {
  const themeLink = document.getElementById('theme-link') as HTMLLinkElement | null;
  if (themeLink) {
    themeLink.href = `/styles/${themeName}.css`;
  }
};