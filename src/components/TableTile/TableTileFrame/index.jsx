import "./style.css";


function TableTileFrame(props) {
    const { children } = props;
    return (
        <div className="table-tile-frame">{children}</div>
    );
}


export default TableTileFrame;
