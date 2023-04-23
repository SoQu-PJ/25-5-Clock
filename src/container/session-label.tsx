import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const SessionLabel = (props: any) => {
    const decrementHandler = () => {
        if (props.breakSession > 1)
            props.setBreakSession((prev: number) => prev - 1);
    }

    const incrementHanler = () => {
        if (props.breakSession < 60)
            props.setBreakSession((prev: number) => prev + 1);
    }

    return (
        <section id="session-label">
            <h2>Session Length</h2>
            <button id="session-decrement" onClick={decrementHandler}><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="session-length">{props.breakSession}</p>
            <button id="session-increment" onClick={incrementHanler}><FontAwesomeIcon icon={faCircleUp} /></button>
        </section>
    )
}

export default SessionLabel;