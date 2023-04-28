import { useState, useEffect, useRef } from "react";
import { TimerLabelInterface } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

const TimerLabel = ({ seconds, setSeconds, breakLength }: TimerLabelInterface) => {

    const [hrs, setHrs] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);
    const intervalref = useRef<number | null>(null);

    const startTimerHandler = () => {
        if (intervalref.current !== null) return;
        intervalref.current = window.setInterval(() => {
            setSeconds((prev: number) => prev - 1);
        }, 1000);
    }

    const stopTimerHandler = () => {
        if (intervalref.current) {
            window.clearInterval(intervalref.current);
            intervalref.current = null;
        }
    }

    useEffect(() => {
        return () => {
            if (intervalref.current !== null)
                window.clearInterval(intervalref.current);
        };
    }, []);

    useEffect(() => {
        if (seconds === 0)
            stopTimerHandler();

        setHrs(Math.floor(seconds / 3600));
        setMin(Math.floor((seconds - (hrs * 3600)) / 60));
        setSec(seconds % 60);

    }, [seconds]);


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