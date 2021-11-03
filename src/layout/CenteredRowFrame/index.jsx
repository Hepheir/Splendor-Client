import "./style.css";


function CenteredRowFrame(props) {
    const { children } = props;
    return (
        <div className="centered-row-frame">
            {children}
        </div>
    );
}


export default CenteredRowFrame;
