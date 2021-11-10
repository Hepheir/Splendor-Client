import "./style.css";


function PlayerColumnFrame(props) {
    const { children } = props;
    return (
        <div className="player-column-frame">{children}</div>
    )
}


export default PlayerColumnFrame;
