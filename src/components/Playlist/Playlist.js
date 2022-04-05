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

export default Playlist;
