import "./style.css";


function TileDrawer(props) {
    const { children } = props;
    return (
        <div className="tile-drawer">
            {children ? children.map(child =>
                <div className="tile-drawer-item">
                    {child}
                </div>
            ) : null}
        </div>
    );
}


export default TileDrawer;
