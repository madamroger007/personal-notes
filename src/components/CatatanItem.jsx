import React from "react";
import CatatanItemBody from "./CatatanItemBody";

function CatatanItems({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onMove,
  archived,
}) {
  return (
    <div className="note-item">
      <CatatanItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action ">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
        <button className="note-item__archive-button" onClick={() => onMove(id)}> {archived ? "Pindahkan" : "Arsipkan"}</button>
      </div>
    </div>
  );
}

export default CatatanItems;
