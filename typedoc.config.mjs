/** @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('./src/config').Config>} */
const config = {
  customFooterHtml:
    '&copy; Charles Harwood — <a target="_blank" href="https://charlesharwood.dev">charlesharwood.dev</a>',
  entryPoints: ['./src/index.ts'],
  gitRemote: 'origin',
  gitRevision: 'main',
  name: 'typedoc-plugin-umami-analytics',
  navigationLinks: {
    GitHub: 'https://github.com/charles4221/typedoc-plugin-umami-analytics',
  },
  favicon: './assets/logo.png',
  out: './docs',
  plugin: ['typedoc-github-theme', './dist/index.js'],
  readme: './README.md',
  router: 'structure',
  sort: false,
  headings: {
    readme: false,
    document: true,
  },
  tsconfig: './tsconfig.json',
  theme: 'typedoc-github-theme',
  darkHighlightTheme: 'catppuccin-mocha',
  lightHighlightTheme: 'catppuccin-latte',
  umamiScriptURL: 'https://analytics.charlesharwood.dev/script.js',
  umamiWebsiteID: 'c7d8cd27-6212-454d-849b-2a9227b07b2c',
  useFirstParagraphOfCommentAsSummary: true,
};

export default config;
