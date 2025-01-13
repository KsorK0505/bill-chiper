import "@styles/css/components/homeContentPiece.css";

function homeContentPiece({props}) {

    return (
        <div className="home-content-piece"
            style={{
                backgroundImage: props.bgURL,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="content-piece-logo">
                <img 
                    src={props.logoURL}
                    alt="Logo"
                />
            </div>
            <div className="content-piece-data">
                <div className="content-piece-data-title">
                    {props.title}
                </div>
                <div className="content-piece-data-item">
                    <div>Price</div>
                    <div>{props.Price}</div>
                </div>
                <hr />
                <div className="content-piece-data-item">
                    <div>Market Cap</div>
                    <div>{props.Market}</div>
                </div>
                <hr />
                <div className="content-piece-data-item">
                    <div>Liquidity</div>
                    <div>{props.Liquidity}</div>
                </div>
                <hr />
                <div className="content-piece-data-item">
                    <div>Circulating Supply</div>
                    <div>{props.Circulating}</div>
                </div>
                <hr />
                <div className="content-piece-data-item">
                    <div>Amount Burned</div>
                    <div>{props.Amount}</div>
                </div>
            </div>
        </div>
    );
}

export default homeContentPiece;