import { useState, useEffect, useRef } from "react";
import { TimerLabelInterface } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";

import alarmSound from '../assets/sound/15906.mp3';

const TimerLabel = ({ power, setPower, seconds, setSeconds, breakLength, breakSession, setBreakLength, setBreakSession }: TimerLabelInterface) => {

    const [hrs, setHrs] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);

    const intervalref = useRef<number | null>(null);
    const timeoutref = useRef<number | null>(null);

    const [startBreak, setStartBreak] = useState<boolean>(false);
    const [switchIcon, setSwitchIcon] = useState<boolean>(true);

    const startTimerHandler = () => {
        if (intervalref.current !== null) return;
        if (!power) setPower(true);

        setSwitchIcon((perv: boolean) => !perv);

        if (startBreak) {
            if (seconds < 1) {
                setStartBreak((prev: boolean) => !prev);
                setSeconds(breakSession * 60);
            }
            intervalref.current = window.setInterval(() => {
                setSeconds((prev: number) => prev - 1);
            }, 1000);
        }
        else {
            if (seconds < 1) {
                setStartBreak((prev: boolean) => !prev);
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

        if (timeoutref.current) {
            window.clearTimeout(timeoutref.current);
            timeoutref.current = null;
        }

        setSwitchIcon((prev: boolean) => !prev);
    }

    const resetTimerHandler = () => {
        stopTimerHandler();
        setPower(false);
        setBreakLength(5);
        setBreakSession(25);
        setSeconds(breakSession * 60);
        setStartBreak(false);
        playAudio(false);
    }

    const playAudio = (action: boolean) => {
        const audio = document.getElementById("beep") as HTMLAudioElement;
        if (action)
            audio.play();
        else {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    useEffect(() => {
        if (power || intervalref.current !== null)
            document.title = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
        else
            document.title = `25-5 Clock`

        console.log(timeoutref.current);
    })

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
            if (intervalref.current) {
                window.clearInterval(intervalref.current);
                intervalref.current = null;
            }

            playAudio(true);

            timeoutref.current = window.setTimeout(() => {
                startTimerHandler();
            }, 3500);
        }

    }, [seconds]);


    return (
        <section id="timer-label">
            <h2 style={seconds < 60 ? { color: 'red' } : {}}>{!startBreak ? 'Session' : 'Break'}</h2>
            <p
                id="time-left"
                style={seconds < 60 ? { color: 'red' } : {}}>
                {min < 10 ? '0' : ''}{min}:{sec < 10 ? '0' : ''}{sec}
            </p>
            <audio id="beep">
                <source src={alarmSound} />
            </audio>
            <button id="start_stop" onClick={switchIcon ? startTimerHandler : stopTimerHandler}><FontAwesomeIcon icon={switchIcon ? faPlay : faStop} /></button>
            <button id="reset" onClick={resetTimerHandler}><FontAwesomeIcon icon={faRepeat} /></button>
        </section >
    )
}

export default TimerLabel;