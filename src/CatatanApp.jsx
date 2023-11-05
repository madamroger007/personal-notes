import React from "react";
import autoBind from "react-autobind";
import Navbar from "./components/Navbar"
import CatatanInput from "./components/CatatanInput";
import { getInitialData } from "./utils/index";
import CatatanList from "./components/CatatanList";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      catatan: getInitialData(),
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
    this.setState( prevState =>({
      catatan: prevState.catatan.filter((note) => note.id !== id),
    }));
  }

  onMoveArsipHandler(id) {
    this.setState(prevState => {
      return {
        prevState: prevState.catatan.map(note =>
          note.id === id ? (note.archived = !note.archived) : note
        )
      }
    })
  
  }

  onSearchArsipCatatan(event) {
    this.setState({
      searchCatatan: event.target.value,
    });
  }

  searchArchivedNotes() {
    const { catatan, searchCatatan } = this.state;
    return catatan.filter((note) =>
      note.title.toLowerCase().includes(searchCatatan.toLowerCase())
    );
    
  };

  render() {
   
    const activeNotes = this.searchArchivedNotes().filter((note) => note.archived === false);
    const archiveNotes = this.searchArchivedNotes().filter((note) => note.archived === true);
  
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
            key={activeNotes.id}
            catatan={activeNotes}
            onDelete={this.onDeleteCatatanHandler}
            onMove={this.onMoveArsipHandler}
          />

          <h2>Arsip</h2>

          <CatatanList
            key={archiveNotes.id}
            catatan={archiveNotes}
            onDelete={this.onDeleteCatatanHandler}
            onMove={this.onMoveArsipHandler}
          />
        </section>
      </>
    );
  }
}

export default CatatanApp;
