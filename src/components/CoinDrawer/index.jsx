import "./style.css";


function CoinDrawer(props) {
    const { children } = props;
    return (
        <div className="coin-drawer">
            {children.map(child =>
                <div className="coin-drawer-item">
                    {child}
                </div>
            )}
        </div>
    );
}


export default CoinDrawer;
