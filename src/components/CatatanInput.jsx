import React from "react";
import autoBind from "react-autobind";

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    autoBind(this);
  }

  onChangeTitle(ev) {
    const title = ev.target.value;
    const length = title.length;

    // Jika jumlah karakter lebih dari 50
    if (length > 50) {
      // Tampilkan peringatan
      alert(`Judul tidak boleh lebih dari 50 karakter.`);
      // Jangan ubah state
      return;
    }
    this.setState(() => {
      return {
        title: title,
      };
    });
  }

  onChangeBody(ev) {
    this.setState(() => {
      return {
        body: ev.target.value,
      };
    });
  }

  onSubmitEventHandler(ev) {
    ev.preventDefault();
    const { title } = this.state;
    const titles = title.length;
    titles > 50
      ? alert("Inputan Melebihi Batass!!")
      : this.props.addCatatan(this.state);

    this.setState({
      title: "",
      body: "",
    });
  }

  onLimitCharHandler(text, limit) {
    return limit - text.length;
  }
  render() {
    const { title } = this.state;
    const titleCharacter = this.onLimitCharHandler(title, 50);

    return (
      <form onSubmit={this.onSubmitEventHandler} className="note-input">
        <h1 className="note-input__title ">Buat catatan</h1>
        <p className="note-input__title__char-limit">
          Judul maksimal {""}
          {titleCharacter < 0 ? (
            <span style={{ color: "red" }}>lebih dari batas</span>
          ) : (
            <span style={{ fontWeight: "Bold", color: "white" }}>
              {titleCharacter}
            </span>
          )}{" "}
          karakter
        </p>
        <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="Title..."
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <textarea
          id="bodyInput"
          name="body"
          cols="30"
          rows="10"
          placeholder="Body.."
          value={this.state.body}
          onChange={this.onChangeBody}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default CatatanInput;
