import "@styles/css/components/sideBar.css";
import logoImage from "@assets/img/logo.svg";
import logoTitle from "@assets/img/logo-text.svg";
import HomeIcon from "@assets/icon/home.svg";
import EarnIcon from "@assets/icon/earn.svg";
import NFTIcon from "@assets/icon/NFT.svg";
import SwapIcon from "@assets/icon/swap.svg";
import BridgeIcon from "@assets/icon/bridge.svg";

function sideBar() {
    return (
        <div className="sideBar">
            <div className="logo">
                <img
                    src={logoImage}
                    className="logo-image"
                    alt="logo image"
                />
                <img
                    src={logoTitle}
                    className="logo-title"
                    alt="logo title"
                />
            </div>
            <div className="menu">
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <img src={HomeIcon} alt="Home Icon" />
                    </div>
                    <div className="menu-item-name">
                        Home
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <img src={EarnIcon} alt="Earn Icon" />
                    </div>
                    <div className="menu-item-name">
                        Earn
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <img src={NFTIcon} alt="NFT Icon" />
                    </div>
                    <div className="menu-item-name">
                        NFT's
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <img src={SwapIcon} alt="Swap Icon" />
                    </div>
                    <div className="menu-item-name">
                        Swap
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-name">
                        <img src={BridgeIcon} alt="Bridge Icon" />
                    </div>
                    <div className="menu-item-name">
                        Bridge
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default sideBar;