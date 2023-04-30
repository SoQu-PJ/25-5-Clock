import { BreakLabelInterface } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

// min 1
// max 60

const BreakLabel = ({ power, breakLength, setBreakLength }: BreakLabelInterface) => {
    const decrementHandler = () => {
        if (breakLength > 1)
            setBreakLength((prev: number) => prev - 1);
    }

    const incrementHanler = () => {
        if (breakLength < 60)
            setBreakLength((prev: number) => prev + 1);
    }

    return (
        <section id="break-label">
            <h2>Break Length</h2>
            <button id="break-decrement" onClick={decrementHandler} disabled={power}><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="break-length">{breakLength}</p>
            <button id="break-increment" onClick={incrementHanler} disabled={power}> <FontAwesomeIcon icon={faCircleUp} /></button>
        </section >
    )
}

export default BreakLabel;