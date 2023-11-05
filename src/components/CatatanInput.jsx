import React from "react";
import autoBind from "react-autobind";

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      bodyCharLimit: 50,
    };

    autoBind(this);
  }

  onChangeTitle(ev) {
    this.setState(() => {
      return {
        title: ev.target.value,
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
    const title = this.state.title.length;
    title > 50
      ? alert("Inputan Melebihi Batass!!")
      : this.props.addCatatan(this.state);
  }
  render() {
    const character = this.state.bodyCharLimit - this.state.title.length;

    return (
      <form onSubmit={this.onSubmitEventHandler} className="note-input">
        <h1 className="note-input__title ">Buat catatan</h1>
        <p className="note-input__title__char-limit">
          Sisa karakter
          {character < 0 ? (
            <span style={{ color: "red" }}>lebih dari batas</span>
          ) : (
            character
          )}
        </p>
        <input
          type="text"
          placeholder="Title..."
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <textarea
          name=""
          id=""
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
