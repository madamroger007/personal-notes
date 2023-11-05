import React from "react";
import autoBind from "react-autobind";
import Navbar from "./Navbar";
import CatatanInput from "./CatatanInput";
import { getInitialData } from "../utils/index";
import CatatanList from "./CatatanList";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      catatan: getInitialData(),
      archivedCatatan: [],
      searchCatatan: "",
      filterCatatan: [],
    };

    autoBind(this);
  }

  onAddCatatanHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        catatan: [
          ...prevState.catatan,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteCatatanHandler(id) {
    const { catatan, archivedCatatan } = this.state;
    const delcatatan = catatan.filter((note) => note.id !== id);
    const delArsipcatatan = archivedCatatan.filter((note) => note.id !== id);
    this.setState({ catatan: delcatatan, archivedCatatan: delArsipcatatan });
  }

  onMoveArsipHandler(id) {
    const { catatan, archivedCatatan } = this.state;
    const updateToArsip = catatan.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    const toArsip = updateToArsip.find((note) => note.id === id);
    console.log(toArsip);
    this.setState({
      catatan: updateToArsip.filter((note) => note.id !== id),
      archivedCatatan: [...archivedCatatan, toArsip],
    });
    console.log(archivedCatatan);
  }

  onSearchArsipCatatan(event) {
    this.setState({
      searchCatatan: event.target.value,
    });
  }

  searchArchivedNotes = (searchTerm) => {
    const { catatan } = this.state;
    const filteredArchivedNotes = catatan.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredArchivedNotes;
  };

  render() {
    return (
      <>
        <Navbar
          onSearch={this.onSearchArsipCatatan}
          search={this.state.searchCatatan}
        />

        <section className="note-app__body ">
          <CatatanInput addCatatan={this.onAddCatatanHandler} />
          <h2>Catatan Aktif</h2>

          <CatatanList
            catatan={this.state.catatan}
            onDelete={this.onDeleteCatatanHandler}
            onMove={this.onMoveArsipHandler}
          />

          <h2>Arsip</h2>

          <CatatanList
            catatan={this.state.archivedCatatan}
            onDelete={this.onDeleteCatatanHandler}
            onMove={this.onMoveArsipHandler}
          />
        </section>
      </>
    );
  }
}

export default CatatanApp;
