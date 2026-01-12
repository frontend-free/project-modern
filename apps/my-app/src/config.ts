const isDev = process.env.NODE_ENV === 'development';

const globalConfig = {
  basename: isDev ? '/dev-only' : '',
  name: 'PivotAgent',
};

const localStorageKey = {
  token: 'AUTHORIZATION',
};

export { globalConfig, localStorageKey };
