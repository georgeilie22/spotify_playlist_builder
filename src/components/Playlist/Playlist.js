import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  };

  const emptyPlaylistName = () => {
    props.onNameChange("");
  };

  return (
    <div className="Playlist">
      <input
        value={props.playlistName}
        onFocus={emptyPlaylistName}
        onChange={handleNameChange}
      />
      <TrackList
        tracks={props.playlistTracks}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

// class Playlist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.emptyPlaylistName = this.emptyPlaylistName.bind(this);
//   }

//   handleNameChange(event) {
//     this.props.onNameChange(event.target.value);
//   }

//   emptyPlaylistName() {
//     this.props.onNameChange("");
//   }

//   render() {
//     return (
//       <div className="Playlist">
//         <input
//           value={this.props.playlistName}
//           onFocus={this.emptyPlaylistName}
//           onChange={this.handleNameChange}
//         />
//         <TrackList
//           tracks={this.props.playlistTracks}
//           onAdd={this.props.onAdd}
//           onRemove={this.props.onRemove}
//           isRemoval={true}
//         />
//         <button className="Playlist-save" onClick={this.props.onSave}>
//           SAVE TO SPOTIFY
//         </button>
//       </div>
//     );
//   }
// }

export default Playlist;
