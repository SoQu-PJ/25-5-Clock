import { useState } from 'react'
import BreakLabel from './container/break-label'
import SessionLabel from './container/session-label'
import TimerLabel from './container/timer-label'
import './App.css'

function App() {
  const [breakLength, setBreakLength] = useState<number>(5);
  const [breakSession, setBreakSession] = useState<number>(25);

  const [seconds, setSeconds] = useState<number>(0)


  return (
    <main className='clock-container'>
      <h1 className='clock-title'>25 + 5 Clock</h1>
      <BreakLabel
        breakLength={breakLength}
        setBreakLength={setBreakLength} />
      <SessionLabel
        breakSession={breakSession}
        setBreakSession={setBreakSession}
        setSeconds={setSeconds} />
      <TimerLabel
        breakSession={breakSession}
        setBreakSession={setBreakSession}
        breakLength={breakLength}
        seconds={seconds}
        setSeconds={setSeconds} />
    </main>
  )
}

export default App
