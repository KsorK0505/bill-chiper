import React from 'react';
import ReactDOM from 'react-dom/client';
import '@rainbow-me/rainbowkit/styles.css';
import './styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme  } from '@rainbow-me/rainbowkit';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { config } from '@utils/wagmi.js';
import SideBar from "@/components/SideBar/SideBar.jsx";
import Header from "@/components/Header/Header.jsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <BrowserRouter>
              <div className='flex'>
                <SideBar />
                <div>
                  <Header />
                  <App />
                </div>
              </div>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

reportWebVitals();
