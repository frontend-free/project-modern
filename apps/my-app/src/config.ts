import packageJson from '../package.json';

const isDev = process.env.NODE_ENV === 'development';

const config = {
  root: isDev ? '/dev-only' : '/',
  name: packageJson.name,
  // antd
  theme: {
    cssVar: true,
    token: {
      colorPrimary: '#0374E9',
    },
    components: {
      Button: {
        colorPrimary: '#0374E9',
      },
    },
  },
};

export { config };
