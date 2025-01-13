import "@assets/css/components/Content/Home/HomeContentPiece.css";

function HomeContentPiece({props}) {
    return (
        <div className={`home-content-piece ${props.bgIdx}`}>
            <div className={`content-piece-logo ${props.bgIdx}`}>
                <img src={props.logoURL} alt="Logo" />
            </div>
            <div className="content-piece-data">
                <div className="content-piece-data-title">
                    {props.title}
                </div>
                <div className="content-piece-data-item">
                    <div>Price</div>
                    <div>{props.Price}</div>
                </div>
                <hr className="content-piece-data-item-border" />
                <div className="content-piece-data-item">
                    <div>Market Cap</div>
                    <div>{props.Market}</div>
                </div>
                <hr className="content-piece-data-item-border" />
                <div className="content-piece-data-item">
                    <div>Liquidity</div>
                    <div>{props.Liquidity}</div>
                </div>
                <hr className="content-piece-data-item-border" />
                <div className="content-piece-data-item">
                    <div>Circulating Supply</div>
                    <div>{props.Circulating}</div>
                </div>
                <hr className="content-piece-data-item-border" />
                <div className="content-piece-data-item">
                    <div>Amount Burned</div>
                    <div>{props.Amount}</div>
                </div>
            </div>
        </div>
    );
}

export default HomeContentPiece;