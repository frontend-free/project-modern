const isDev = process.env.NODE_ENV === 'development';

const globalConfig = {
  basename: isDev ? '/dev-only' : '/agent',
  name: 'Agent',
};

const localStorageKey = {
  token: 'AUTHORIZATION',
};

export { globalConfig, localStorageKey };
