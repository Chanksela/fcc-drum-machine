import React, { useEffect } from "react";

function Pad({ audio, volume, setRecording }) {
  const playSound = () => {
    const audioTag = document.getElementById(audio.keyTrigger);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + audio.keyTrigger);
  };
  useEffect(() => {
    document.addEventListener("keydown", press);
    return () => {
      document.removeEventListener("keydown", press);
    };
  }, []);
  const press = (e) => {
    if (e.keyCode === audio.keyCode) {
      playSound();
    }
  };
  return (
    <button
      onClick={playSound}
      id={audio.id}
      className="drum-pad btn btn-primary text-white col-3 h-20 m-2 border-3"
    >
      <audio className="clip" id={audio.keyTrigger} src={audio.url} />
      {audio.keyTrigger}
    </button>
  );
}

export default Pad;
