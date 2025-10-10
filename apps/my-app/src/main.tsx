// 项目主入口
import microApp from '@micro-zoe/micro-app';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';

microApp.start();

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(<App />);
