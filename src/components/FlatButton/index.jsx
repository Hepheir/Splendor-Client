import classNames from "classnames";
import "./style.css";


function FlatButton(props) {
    const { children, onClick } = props;
    return (
        <div className="flat-button" onClick={onClick}>
            {children}
        </div>
    );
}


export default FlatButton;
