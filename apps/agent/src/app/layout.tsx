import { PageLayout } from '@fe-free/core';
import { sleep } from '@fe-free/tool';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PagesRoutes } from 'virtual:react-pages';

const AppLayout = () => {
  return (
    <PageLayout
      direction="vertical"
      start={<div className="c-border-bottom flex items-center justify-between">header</div>}
    >
      <PageLayout start={<div className="c-border-right h-full">menu</div>}>
        <Outlet />
      </PageLayout>
    </PageLayout>
  );
};

function PrepareAppLayout() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    sleep(1000).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return <AppLayout />;
}

function WrapAppLayout() {
  const location = useLocation();

  if (
    location.pathname.startsWith(PagesRoutes.AUTH_LOGIN) ||
    location.pathname.startsWith(PagesRoutes.DEMO)
  ) {
    return <Outlet />;
  }

  return <PrepareAppLayout />;
}

export default WrapAppLayout;
