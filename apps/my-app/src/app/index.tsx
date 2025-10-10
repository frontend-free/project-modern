import { config } from '@/config';
import { CoreApp } from '@fe-free/core';
import { initErrorHandle } from '@lib/api';
import microApp from '@micro-zoe/micro-app';
import { useMemo } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { PagesRoutes, pagesRoutes } from 'virtual:react-pages';
import AppLayout from './layout';
import './lib';

function AppRoute() {
  const routes = useMemo(() => {
    return [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to={PagesRoutes.HOME} />,
          },
          ...pagesRoutes,
        ],
      },
    ];
  }, []);

  return useRoutes(routes);
}

const Root = () => {
  return (
    <CoreApp
      basename={config.root}
      name={config.name}
      enableCheckUpdate
      configProviderProps={{
        theme: config.theme,
      }}
      appProps={{
        className: 'w-screen h-screen',
      }}
    >
      <AppRoute />
    </CoreApp>
  );
};

initErrorHandle();

microApp.start();

export default Root;
