import "./style.css";


function PlayerRowFrame(props) {
    const { children } = props;
    return (
        <div className="player-row-frame">
            {children}
        </div>
    );
}


export default PlayerRowFrame;
