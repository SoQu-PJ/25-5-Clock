import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

const TimerLabel = () => {
    return (
        <section id="timer-label">
            <h2>Session</h2>
            <p id="time-left">00:00</p>
            <button id="start_stop"><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faStop} /></button>
            <button id="reset"><FontAwesomeIcon icon={faRepeat} /></button>
        </section>
    )
}

export default TimerLabel;