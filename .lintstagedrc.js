module.exports = {
  '*.{js,jsx,ts,tsx}': ['vp lint --fix', 'vp fmt --write'],
  '*.{css,less,scss,sass}': ['vp fmt --write'],
  '*.{md,mdx,json,html}': ['vp fmt --write'],
};
