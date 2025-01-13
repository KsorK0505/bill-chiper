import "@styles/css/components/header.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
    return (
        <div className="header">
            <button className="connect-wallet-button"><ConnectButton/></button>
        </div>
    );
}

export default Header;