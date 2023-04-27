import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

const TimerLabel = (props: any) => {

    const [hrs, setHrs] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);
    const [interval, setInterval] = useState<boolean>(false);

    const startTimerHandler = () => {

    }

    useEffect(() => {
        setHrs(Math.floor(props.seconds / 3600));
        setMin(Math.floor((props.seconds - (hrs * 3600)) / 60));
        setSec(props.seconds % 60);
    }, [props.seconds])

    return (
        <section id="timer-label">
            <h2>Session</h2>
            <p id="time-left">{min < 10 ? '0' : ''}{min}:{sec < 10 ? '0' : ''}{sec}</p>
            <button id="start_stop" onClick={startTimerHandler}><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faStop} /></button>
            <button id="reset"><FontAwesomeIcon icon={faRepeat} /></button>
        </section>
    )
}

export default TimerLabel;