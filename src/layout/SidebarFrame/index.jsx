import "./style.css";


function SidebarFrame(props) {
    const { children } = props;
    return (
        <div className="sidebar-frame">{children}</div>
    )
}


export default SidebarFrame;
