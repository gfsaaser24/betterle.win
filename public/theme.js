// Runs in <head> before the page paints: applies the saved theme (auto, light or dark) so there is no flash.
// app.js builds the picker and calls window.__betterTheme.set().
(() => {
  const KEY = 'betterlet.theme';
  const root = document.documentElement;
  const read = () => { try { const v = localStorage.getItem(KEY); return v === 'light' || v === 'dark' ? v : 'auto'; } catch { return 'auto'; } };
  // <picture> and theme-color follow the media query. A forced theme overrides them.
  const syncMedia = (theme) => {
    document.querySelectorAll('source[data-dark-src]').forEach((s) => {
      s.media = theme === 'auto' ? '(prefers-color-scheme: dark)' : theme === 'dark' ? 'all' : 'not all';
    });
    const [light, dark] = document.querySelectorAll('meta[name="theme-color"]');
    if (light && dark) {
      light.media = theme === 'auto' ? '(prefers-color-scheme: light)' : theme === 'light' ? 'all' : 'not all';
      dark.media = theme === 'auto' ? '(prefers-color-scheme: dark)' : theme === 'dark' ? 'all' : 'not all';
    }
  };
  const apply = (theme) => {
    if (theme === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', theme);
    syncMedia(theme);
  };
  apply(read());
  document.addEventListener('DOMContentLoaded', () => syncMedia(read()));
  window.__betterTheme = {
    get: read,
    set: (theme) => { try { if (theme === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, theme); } catch {} apply(theme); },
  };
})();
