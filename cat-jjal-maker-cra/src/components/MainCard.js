const MainCard = ({ mainCat, onHeartClick, alreadyFavorite }) => {
    console.log(alreadyFavorite);
    const heartIcon = alreadyFavorite ? "💖" : "🤍";

    return (
        <div className="main-card">
            <img src={mainCat} alt="고양이" width="400" />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    );
};

export default MainCard;