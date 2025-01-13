import { ConnectButton } from '@rainbow-me/rainbowkit';

import "@assets/css/components/Header/Header.css";

function Header() {
    return (
        <div className="header">
            <button className="connect-wallet-button">
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
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                    <div
                        {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                            height: '100%',
                        },
                        })}
                    >
                        {(() => {
                        if (!connected) {
                            return (
                            <button onClick={openConnectModal} type="button" className="w-full h-full" >
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
                            <div style={{ display: 'flex', gap: 5 }}>
                            <button
                                onClick={openChainModal}
                                style={{ display: 'flex', alignItems: 'center' }}
                                type="button"
                            >
                                {chain.hasIcon && (
                                <div
                                    style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 0,
                                    }}
                                >
                                    {chain.iconUrl && (
                                    <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        style={{ width: 12, height: 12 }}
                                    />
                                    )}
                                </div>
                                )}
                            </button>

                            <button onClick={openAccountModal} type="button">
                                {account.displayName}
                                {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
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