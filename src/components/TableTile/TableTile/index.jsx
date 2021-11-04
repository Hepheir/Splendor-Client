import Tile from "../../Tile";
import "./style.css";


function TableTile(props) {
    // children is tileId
    const { children } = props;
    return (
        <div className="table-tile-tile">
            <Tile>{children}</Tile>
        </div>
    );
}


export default TableTile;
