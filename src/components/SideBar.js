import React from "react";

function SideBar(props){
    const activeNumber = props.activeNumber
    return(
        <div className="links">
            {/* <a className={activeNumber===0 && "active"} onClick={()=>props.handleClick(0)}>Home</a> */}
            <a className={activeNumber===0 && "active"} onClick={()=>props.handleClick(0)}>About Me</a>
            <a className={activeNumber===1 && "active"} onClick={()=>props.handleClick(1)}>Skills</a>
            <a className={activeNumber===2 && "active"} onClick={()=>props.handleClick(2)}>Projects</a>
            {/* <a className={activeNumber===4 && "active"} onClick={()=>props.handleClick(4)}>Random</a> */}
            <a className={activeNumber===3 && "active"} onClick={()=>props.handleClick(3)}>Contact</a>
        </div>
    )
}
export default SideBar