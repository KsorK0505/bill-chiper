import "@assets/css/home/home-content-piece/home-content-piece.css";

function HomeContentPiece({ props }) {
  const dataItems = [
    { label: "Price", value: props.Price },
    { label: "Market Cap", value: props.Market },
    { label: "Liquidity", value: props.Liquidity },
    { label: "Circulating Supply", value: props.Circulating },
    { label: "Amount Burned", value: props.Amount }
  ];

  return (
    <div className={`home-content-piece ${props.bgIdx}`}>
      <div className={`content-piece-logo ${props.bgIdx}`}>
        <img src={props.logoURL} alt="Logo" />
      </div>
      <div className="content-piece-data">
        <div className="content-piece-data-title">{props.title}</div>
        {dataItems.map((item, index) => (
            <div key={index}>
                <div className="content-piece-data-item">
                    <div>{item.label}</div>
                    <div>{item.value}</div>
                </div>
                {index < dataItems.length - 1 && (
                    <hr className="content-piece-data-item-border" />
                )}
            </div>
        ))}
      </div>
    </div>
  );
}

export default HomeContentPiece;
