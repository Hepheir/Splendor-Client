import "./style.css";


function PlayerName(props) {
    const { children } = props;
    return (
        <div className="player-name">
            {children}
        </div>
    );
}


export default PlayerName;
