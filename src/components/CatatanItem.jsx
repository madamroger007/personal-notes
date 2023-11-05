import React from "react";
import CatatanItemBody from "./CatatanItemBody";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

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
      <CatatanItemBody  title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action ">
      <DeleteButton id={id} onDelete={onDelete}/>
      <UpdateButton id={id} onMove={onMove}>{archived ? "Pindahkan" : "Arsipkan"} </UpdateButton>
      </div>
    </div>
  );
}

export default CatatanItems;
