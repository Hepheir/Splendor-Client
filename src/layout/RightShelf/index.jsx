import "./style.css";


function RightShelf(props) {
    const { children } = props;
    return (
        <div className="right-shelf">
            {children}
        </div>
    )
}


export default RightShelf;
