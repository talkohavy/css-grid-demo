import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from '@src/App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import './index.css';

function Client() {
  return (
    <StrictMode>
      <BrowserRouter>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(<Client />);
