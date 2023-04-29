import { useState, useEffect, useRef } from "react";
import { TimerLabelInterface } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

const TimerLabel = ({ seconds, setSeconds, breakLength, breakSession }: TimerLabelInterface) => {

    const [hrs, setHrs] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);
    const intervalref = useRef<number | null>(null);
    const [startBreak, setStartBreak] = useState<boolean>(false);
    const [timerTitle, setTimerTitle] = useState<boolean>(true);
    const [switchIcon, setSwitchIcon] = useState<boolean>(true);

    const startTimerHandler = () => {
        if (intervalref.current !== null) return;

        setSwitchIcon(false);

        if (startBreak) {
            if (seconds < 1) {
                setStartBreak((prev: boolean) => !prev)
                setSeconds(breakSession * 60);
            }
            intervalref.current = window.setInterval(() => {
                setSeconds((prev: number) => prev - 1);
            }, 1000);
        }
        else {
            if (seconds < 1) {
                setStartBreak((prev: boolean) => !prev)
                setSeconds(breakLength * 60);
            }
            intervalref.current = window.setInterval(() => {
                setSeconds((prev: number) => prev - 1);
            }, 1000);
        }
    }

    const stopTimerHandler = () => {
        if (intervalref.current) {
            window.clearInterval(intervalref.current);
            intervalref.current = null;
        }

        setSwitchIcon(true);
    }

    const resetTimerHandler = () => {
        setSeconds(breakSession * 60);
        setStartBreak(false);
        stopTimerHandler();
    }

    useEffect(() => {
        return () => {
            if (intervalref.current !== null)
                window.clearInterval(intervalref.current);
        };
    }, []);

    useEffect(() => {
        setHrs(Math.floor(seconds / 3600));
        setMin(Math.floor((seconds - (hrs * 3600)) / 60));
        setSec(seconds % 60);

        if (seconds < 1 && intervalref.current !== null) {
            setTimerTitle((prev: boolean) => !prev);
            stopTimerHandler();
            startTimerHandler();
        }
    }, [seconds]);


    return (
        <section id="timer-label">
            <h2>{timerTitle ? 'Session' : 'Break'}</h2>
            <p id="time-left">{min < 10 ? '0' : ''}{min}:{sec < 10 ? '0' : ''}{sec}</p>
            <button id="start_stop" onClick={switchIcon ? startTimerHandler : stopTimerHandler}><FontAwesomeIcon icon={switchIcon ? faPlay : faStop} /></button>
            <button id="reset" onClick={resetTimerHandler}><FontAwesomeIcon icon={faRepeat} /></button>
        </section>
    )
}

export default TimerLabel;