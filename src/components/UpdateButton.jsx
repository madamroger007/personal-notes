import React  from "react";

function UpdateButton({id, onMove, children}){
    return (
        <button className="note-item__archive-button" onClick={() => onMove(id)}>{children}</button>
    )
}

export default UpdateButton;