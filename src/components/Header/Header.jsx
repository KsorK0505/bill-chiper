import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "@assets/css/components/Header/Header.css";

function Header() {
  const [isConnected, setConnected] = useState(false);

  return (
    <div className="header">
      <button
        className={`connect-wallet-button ${isConnected ? "connect" : ""}`}
      >
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            useEffect(() => {
              setConnected(connected);
            }, [connected]);

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                    height: "100%",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="h-full w-full"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 20 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 40,
                              height: 40,
                              borderRadius: 999,
                              overflow: "hidden",
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 40, height: 40 }}
                              />
                            )}
                          </div>
                        )}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="from-[rgba(131, 70, 227, 1)] to-[rgba(11, 55, 214, 1)] !important w-full rounded-full bg-gradient-to-r"
                      >
                        {account.displayName}
                        <br></br>
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </button>
    </div>
  );
}

export default Header;
