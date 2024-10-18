import Player from "./components/Player.jsx"
import TimerChallenge from "./components/TimerChallenge.jsx"

function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Fácil" targetTime={1}/>
        <TimerChallenge title="Difícil" targetTime={5}/>


      </div>

    </>
  )
}

export default App
