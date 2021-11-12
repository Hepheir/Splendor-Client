import "./style.css";


function SidebarFrame(props) {
    const { children } = props;
    return (
        <div className="sidebar-frame">{children}</div>
    )
}


function NonSidebarFrame(props) {
    const { children } = props;
    return (
        <div className="non-sidebar-frame">
            <div className="non-sidebar-frame-container">{children}</div>
        </div>
    )
}


export {
    SidebarFrame,
    NonSidebarFrame,
};
