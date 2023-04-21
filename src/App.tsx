import BreakLabel from './container/break-label'
import SessionLabel from './container/session-label'
import TimerLabel from './container/timer-label'
import './App.css'

function App() {

  return (
    <main className='clock-container'>
      <h1 className='clock-title'>25 + 5 Clock</h1>
      <BreakLabel />
      <SessionLabel />
      <TimerLabel />
    </main>
  )
}

export default App
