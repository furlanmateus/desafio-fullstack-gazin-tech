import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);
