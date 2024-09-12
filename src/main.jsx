import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import { Provider } from 'react-redux';
import Store from './reduxs/store';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
