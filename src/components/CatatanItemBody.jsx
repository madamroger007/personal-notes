import React from "react";
import { showFormattedDate } from "../utils";

function CatatanItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h1 className="note-item__title">{title}</h1>

      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default CatatanItemBody;
