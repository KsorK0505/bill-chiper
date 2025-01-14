import React from "react";
import { WagmiProvider } from "wagmi";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { config } from "@utils/wagmi.js";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import Header from "@components/Header/Header.jsx";
import SideBar from "@components/SideBar/SideBar.jsx";

import "./assets/css/global.css";
import "@rainbow-me/rainbowkit/styles.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <BrowserRouter>
            <div className="flex">
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
  </React.StrictMode>,
);

reportWebVitals();
