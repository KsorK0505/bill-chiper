import { Link, useLocation } from "react-router-dom";

import "@assets/css/side-bar/side-bar.css";
import NFTIcon from "@assets/icon/NFT.svg";
import logoImage from "@assets/img/logo.svg";
import HomeIcon from "@assets/icon/home.svg";
import EarnIcon from "@assets/icon/earn.svg";
import SwapIcon from "@assets/icon/swap.svg";
import BridgeIcon from "@assets/icon/bridge.svg";
import logoTitle from "@assets/img/logo-title.svg";
import HomeActiveIcon from "@assets/icon/home-active.svg";
import EarnActiveIcon from "@assets/icon/earn-active.svg";
import NFTsActiveIcon from "@assets/icon/NFT-active.svg";
import SwapActiveIcon from "@assets/icon/swap-active.svg";
import BridgeActiveIcon from "@assets/icon/bridge-active.svg";

function SideBar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: HomeIcon, activeIcon: HomeActiveIcon },
    { name: "Earn", path: "/Earn", icon: EarnIcon, activeIcon: EarnActiveIcon },
    { name: "NFTs", path: "/NFTs", icon: NFTIcon, activeIcon: NFTsActiveIcon },
    { name: "Swap", path: "/Swap", icon: SwapIcon, activeIcon: SwapActiveIcon },
    { name: "Bridge", path: "/Bridge", icon: BridgeIcon, activeIcon: BridgeActiveIcon},
  ];

  return (
    <div className="side-bar-container">
      <div className="logo-container">
        <img src={logoImage} className="logo-image" alt="logo image" />
        <img src={logoTitle} className="logo-title" alt="logo title" />
      </div>
      <div className="menu">
        {menuItems.map((item, key) => (
          <Link to={item.path} key={key}>
            <div className={`menu-item ${location.pathname === item.path ? "menu-item-active" : ""}`}>
              <div className="menu-item-icon">
                <img
                  src={
                    location.pathname === item.path
                      ? item.activeIcon
                      : item.icon
                  }
                  alt={`${item.name} Icon`}
                />
              </div>
              <div
                className={
                  location.pathname === item.path
                    ? "menu-item-name-active"
                    : "menu-item-name"
                }
              >
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
