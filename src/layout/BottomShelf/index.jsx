import "./style.css";


function BottomShelf(props) {
    const { children } = props;
    return (
        <div className="bottom-shelf">
            <div className="bottom-shelf-container">
                {children}
            </div>
        </div>
    )
}


export default BottomShelf;
