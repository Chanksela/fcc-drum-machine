import { useState } from "react";
import Pad from "./Pad";
const audios = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");

  return (
    <div
      id="drum-machine"
      className="bg-dark min-vh-100 text-white text-center"
    >
      <h1 className="title">Drum Machine</h1>
      <br />
      <div id="display">
        {" "}
        <h3>Volume</h3>
        <input
          type="range"
          step="0.01"
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          max="1"
          min="0"
          className="w-50"
        />
        <h2>{recording}</h2>
        {recording && (
          <>
            <button onClick={() => setRecording("")} className="btn btn-danger">
              Clear
            </button>
          </>
        )}
      </div>
      <br />
      <br />
      {audios.map((audio) => (
        <Pad
          key={audio.id}
          audio={audio}
          volume={volume}
          setRecording={setRecording}
        />
      ))}
    </div>
  );
}

export default App;
