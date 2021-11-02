import "./style.css";


function LeftShelf(props) {
    const { children } = props;
    return (
        <div className="left-shelf">
            {children}
        </div>
    )
}


export default LeftShelf;
