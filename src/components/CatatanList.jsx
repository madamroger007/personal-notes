import React from "react";
import CatatanItems from "./CatatanItem";

function CatatanList({catatan,onDelete, onMove}) {
  return (
    <div className="notes-list">
    {
      catatan.length === 0 ? (
        <div className="empty-message-container">
          <p>Tidak ada catatan</p>
        </div>
      ):( catatan.map((note) => (
        <CatatanItems key={note.id} id={note.id} onDelete={onDelete} onMove={onMove} archived={note.archived} {...note} />
      )))
    }
    </div>
  );
}

export default CatatanList;
