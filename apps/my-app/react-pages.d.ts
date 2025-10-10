declare module 'virtual:react-pages' {
  import type { RouteObject } from 'react-router-dom';

  export const pagesRoutes: RouteObject[];

  export const PagesRoutes: {
    USER: '/user';
    'USER_[ID]': '/user/:id';
    HOME: '/home';
    DEMO: '/demo';
    AUTH_LOGIN: '/auth/login';
  };
}
