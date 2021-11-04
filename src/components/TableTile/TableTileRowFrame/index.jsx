import "./style.css";


function TableTileRowFrame(props) {
    const { children } = props;
    return (
        <div className="table-tile-row-frame">
            {children}
        </div>
    );
}


export default TableTileRowFrame;
