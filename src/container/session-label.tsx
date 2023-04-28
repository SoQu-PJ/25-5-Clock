import { useEffect } from "react";
import { SessionLabelInterface } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const SessionLabel = ({ breakSession, setBreakSession, setSeconds }: SessionLabelInterface) => {
    const decrementHandler = () => {
        if (breakSession > 1)
            setBreakSession((prev: number) => prev - 1);
    }

    const incrementHanler = () => {
        if (breakSession < 60)
            setBreakSession((prev: number) => prev + 1);
    }

    useEffect(() => {
        setSeconds(breakSession * 60);
        // setSeconds(3);
    }, [breakSession]);

    return (
        <section id="session-label">
            <h2>Session Length</h2>
            <button id="session-decrement" onClick={decrementHandler}><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="session-length">{breakSession}</p>
            <button id="session-increment" onClick={incrementHanler}><FontAwesomeIcon icon={faCircleUp} /></button>
        </section>
    )
}

export default SessionLabel;