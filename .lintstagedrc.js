module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'oxfmt'],
  '*.{css,less,scss,sass}': ['oxfmt', 'stylelint'],
  '*.{md,mdx,json,html}': ['oxfmt'],
};
