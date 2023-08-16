import React, { useState } from "react";
import Data from "../Data/Data";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlinePause } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

const Track = () => {
  const [audioStates, setAudioStates] = useState(
    Data.map(() => ({ audio: new Audio(), playing: false, currentTime: 0 }))
  );

  const handlePlayPause = (index) => {
    const updatedStates = [...audioStates];
    const audioState = updatedStates[index];

    // Pause the current playing audio if it's not the same track
    audioStates.forEach((state, i) => {
      console.log(state, i, index);

      if (state.playing && i !== index) {
        console.log("get stopped");
        state.audio.pause();
        state.playing = false;
      }
    });

    if (audioState.playing) {
      audioState.audio.pause();
      audioState.currentTime = audioState.audio.currentTime; //  Store current time //? 19.022359
      console.log(audioState.currentTime);
    } else {
      audioState.audio.src = Data[index].voice;
      audioState.audio.currentTime = audioState.currentTime; // Restore previous time //? 0
      console.log(audioState.audio.currentTime);
      audioState.audio.play();

      console.log("else triggered");
    }

    audioState.playing = !audioState.playing;
    setAudioStates(updatedStates);
  };

  return (
    <div className="container">
      <div className="music-player">
        <h2>Track List</h2>

        <div className="music-content">
          {Data.map((value, index) => (
            <div className="music-parent" key={index}>
              <div className="left index">
                <p>{value.id.toString().padStart(2, "0")}</p>

                <div className="music-left">
                  {!audioStates[index].playing ? (
                    <CiPlay1
                      className="play"
                      onClick={() => handlePlayPause(index)}
                    />
                  ) : (
                    <AiOutlinePause
                      className="play"
                      onClick={() => handlePlayPause(index)}
                    />
                  )}
                  <div className="left-content">
                    {value.title}
                    <span>{value.small_title}</span>
                  </div>
                </div>
              </div>
              <div className="music-right">
                <p>{value.minute}</p>
                <FiShare2 className="play" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
