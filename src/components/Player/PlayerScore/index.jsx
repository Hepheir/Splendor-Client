import "./style.css";


function PlayerScore(props) {
    const { children } = props;
    return (
        <div className="player-score">
            {children}
        </div>
    );
}


export default PlayerScore;
