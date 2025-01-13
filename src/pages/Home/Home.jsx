import React from "react";

import "@/styles/css/pages/Home/Home.css";
import PluseChainBG from "@assets/img/pluseChain-bg.svg";
import GlobalStatsBG from "@assets/img/globalStats-bg.svg";
import PluseChainLogo from "@assets/img/pluseChain-logo.svg";
import AvalancheBG from "@assets/img/globalLiquidity-bg.svg";
import GlobalStatsLogo from "@assets/img/globalStats-logo.svg";
import AvalancheLogo from "@assets/img/globalLiquidity-logo.svg";
import HomeContentPiece from "@/components/Content/Home/HomeContentPiece";

function Home() {
    const datas = [
        {
            bgURL: GlobalStatsBG,
            logoURL: GlobalStatsLogo,
            title: "Global Stats",
            Price: "$0.00",
            Market: "$0.00",
            Liquidity: "$0.00",
            Circulating: 12345,
            Amount: 1234,
        },
        {
            bgURL: PluseChainBG,
            logoURL: PluseChainLogo,
            title: "Plusechain Stats",
            Price: "$0.00",
            Market: "$0.00",
            Liquidity: "$0.00",
            Circulating: 12345,
            Amount: 1234,
        },
        {
            bgURL: AvalancheBG,
            logoURL: AvalancheLogo,
            title: "Avalanche Stats",
            Price: "$0.00",
            Market: "$0.00",
            Liquidity: "$0.00",
            Circulating: 12345,
            Amount: 1234,
        }
    ];

    return (
        <div className="home">
            {datas.map((data, index) => (
                <HomeContentPiece key={index} props={data} />        
            ))}
        </div>
    );
}

export default Home;