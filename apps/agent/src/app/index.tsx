import { CoreApp } from '@fe-free/core';
import { initErrorHandle } from '@lib/api';
import { Button } from 'antd';
import { useMemo } from 'react';
import { Navigate, useNavigate, useRoutes } from 'react-router-dom';
import { PagesRoutes, pagesRoutes } from 'virtual:react-pages';

import { globalConfig } from '@/config';

import AppLayout from './layout';
import './lib';

function AppRoute() {
  const navigate = useNavigate();

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
      {
        path: '/404',
        element: (
          <div className="flex h-full flex-col items-center justify-center">
            <div>404, 页面不存在</div>
            <Button type="primary" onClick={() => navigate('/')}>
              返回首页
            </Button>
          </div>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
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
