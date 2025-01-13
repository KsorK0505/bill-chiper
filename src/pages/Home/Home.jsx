import React from "react";

import "@assets/css/pages/Home/Home.css";
import PluseChainLogo from "@assets/img/pluseChain-logo.svg";
import GlobalStatsLogo from "@assets/img/globalStats-logo.svg";
import AvalancheLogo from "@assets/img/avalancheStats-logo.svg";
import HomeContentPiece from "@/components/Content/Home/HomeContentPiece";

function Home() {
    const datas = [
        {
            bgIdx: 'first',
            logoURL: GlobalStatsLogo,
            title: "Global Stats",
            Price: "$0.00",
            Market: "$0.00",
            Liquidity: "$0.00",
            Circulating: 12345,
            Amount: 1234,
        },
        {
            bgIdx: 'second',
            logoURL: PluseChainLogo,
            title: "Plusechain Stats",
            Price: "$0.00",
            Market: "$0.00",
            Liquidity: "$0.00",
            Circulating: 12345,
            Amount: 1234,
        },
        {
            bgIdx: 'third',
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
            {datas.map((item, index) => (
                <HomeContentPiece key={index} props={item} />        
            ))}
        </div>
    );
}

export default Home;