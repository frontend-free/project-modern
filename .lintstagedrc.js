module.exports = {
  '*.{js,jsx,ts,tsx}': ['oxlint --fix', 'oxfmt'],
  '*.{css,less,scss,sass}': ['oxfmt', 'stylelint'],
  '*.{md,mdx,json,html}': ['oxfmt'],
};
