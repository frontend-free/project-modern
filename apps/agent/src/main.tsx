import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { initI18n } from './i18n';

import './style.css';

initI18n({
  enTranslation: {},
});

const App = lazy(() => import('./app'));
const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <Suspense fallback={<></>}>
    <App />
  </Suspense>,
);
