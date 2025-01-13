import { Link, useLocation } from "react-router-dom";

import "@styles/css/components/SideBar/SideBar.css";
import NFTIcon from "@assets/icon/NFT.svg";
import logoImage from "@assets/img/logo.svg";
import HomeIcon from "@assets/icon/home.svg";
import EarnIcon from "@assets/icon/earn.svg";
import SwapIcon from "@assets/icon/swap.svg";
import BridgeIcon from "@assets/icon/bridge.svg";
import logoTitle from "@assets/img/logo-title.svg";

function sideBar() {
    const location = useLocation();

    const menuItems = [
        {name:"Home", path:"/", icon:HomeIcon},
        {name:"Earn", path:"/Earn", icon:EarnIcon},
        {name:"NFTs", path:"/NFTs", icon:NFTIcon},
        {name:"Swap", path:"/Swap", icon:SwapIcon},
        {name:"Bridge", path:"/Bridge", icon:BridgeIcon},
    ];

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
                {menuItems.map((item) => (
                    <Link to = {item.path}>
                        <div className={`menu-item ${location.pathname === item.path ? "menu-item-active" : "" }`} >
                            <div className="menu-item-icon">
                                <img src={item.icon} alt={`${item.name} Icon`} />
                            </div>
                            <div className="menu-item-name">
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );    
}

export default sideBar;