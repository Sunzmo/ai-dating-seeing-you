/**
 * Local run entry (public npm deps only).
 * EdenX / SSO 基建在内网不可达，这里直接用 Vite 渲染业务页面。
 */
import { createRoot } from 'react-dom/client';

import Page from './routes/page';
import './routes/index.css';

createRoot(document.getElementById('root')!).render(<Page />);
