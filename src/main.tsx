import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { brandLogo } from '@/assets/brand';

const ensureFavicon = () => {
  const iconRels = ['icon', 'shortcut icon', 'apple-touch-icon'];

  iconRels.forEach((rel) => {
    const existing = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (existing) {
      existing.href = brandLogo;
      existing.type = 'image/png';
      return;
    }

    const link = document.createElement('link');
    link.rel = rel;
    link.type = 'image/png';
    link.href = brandLogo;
    document.head.appendChild(link);
  });
};

ensureFavicon();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
