import React from "react";
import "@styles/css/pages/home.css";
import HomeContentPiece from "@/components/homeContentPiece";
import GlobalStatsBG from "@assets/img/globalStats-bg.svg";
import GlobalStatsLogo from "@assets/img/globalStats-logo.svg";
import PluseChainBG from "@assets/img/pluseChain-bg.svg";
import PluseChainLogo from "@assets/img/pluseChain-logo.svg";
import GlobalLiquidityBG from "@assets/img/globalLiquidity-bg.svg";
import GlobalLiquidityLogo from "@assets/img/globalLiquidity-logo.svg";


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
            bgURL: GlobalLiquidityBG,
            logoURL: GlobalLiquidityLogo,
            title: "Global Liquidity",
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