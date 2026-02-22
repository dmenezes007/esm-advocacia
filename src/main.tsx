import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { brandLogo } from '@/assets/brand';

const ensureFavicon = () => {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (existing) {
    existing.href = brandLogo;
    return;
  }

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = brandLogo;
  document.head.appendChild(link);
};

ensureFavicon();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
