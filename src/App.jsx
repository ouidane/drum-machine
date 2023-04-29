import { useEffect, useState } from 'react'

const sounds = [{
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]


function App() {

  const [display, setDisplay] = useState("")

  useEffect(()=>{
    document.addEventListener("keydown", handleAudio, true)
  },[])

  function handleAudio(e) {
    let sound 
    if (e.type === 'click') {
      const {id} = e.target
      sound = sounds.find(sound => sound.id === id)
    } else if (e.type === 'keydown') {
      const keyDown = e.key.toUpperCase()
      sound = sounds.find(sound => sound.keyTrigger === keyDown)
    }
          
    if (sound) {     
      const audio = document.getElementById(sound.keyTrigger)

      audio.currentTime = 0;
      audio.play()

      const clip = sound.id.replace("-"," ");
      setDisplay(clip)
    } 
  }

  return (
    <div className="container" id="drum-machine">
      <div className="drum">
        {sounds.map(({id, keyTrigger, url}) => (
          <div 
          className="drum-pad" 
          key={id} 
          id={id} 
          onClick={handleAudio}>
            <audio src={url} preload="none" className="clip" id={keyTrigger} />
            {keyTrigger}
          </div>
        ))}
      </div>
      <div id="display">{display}</div>
    </div>
  )
}

export default App
