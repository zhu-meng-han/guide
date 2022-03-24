import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Guide',
  logo: '/logo.svg',
  favicon: '/logo.svg',
  outputPath: 'docs-dist',
  description: 'Onboarding sequence made easy.',
  targets: {
    ie: 11,
  },
  // more config: https://d.umijs.org/config
});
