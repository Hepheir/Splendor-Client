import "./style.css";


function LeftShelf(props) {
    const { children } = props;
    return (
        <div className="left-shelf">
            {children}
        </div>
    )
}


function RightShelf(props) {
    const { children } = props;
    return (
        <div className="right-shelf">
            {children}
        </div>
    )
}


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


export {
    LeftShelf,
    RightShelf,
    BottomShelf,
};
