import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

const TimerLabel = (props: any) => {
    const [sec, setSec] = useState<number>(0)

    const Timer = () => {
        // props.setMin((prev: number) => prev - 1);
        // setSec(60);
        // setInterval(() => {
        //     setSec(prev => prev - 1);
        // }, 1000);
    }

    return (
        <section id="timer-label">
            <h2>Session</h2>
            <p id="time-left">{props.min}:{sec}</p>
            <button id="start_stop" onClick={Timer}><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faStop} /></button>
            <button id="reset"><FontAwesomeIcon icon={faRepeat} /></button>
        </section>
    )
}

export default TimerLabel;