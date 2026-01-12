import { globalConfig } from '@/config';
import { CoreApp } from '@fe-free/core';
import { initErrorHandle } from '@lib/api';
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
      basename={globalConfig.basename}
      name={globalConfig.name}
      enableCheckUpdate
      appProps={{
        className: 'w-screen h-screen',
      }}
    >
      <AppRoute />
    </CoreApp>
  );
};

initErrorHandle();

export default Root;
