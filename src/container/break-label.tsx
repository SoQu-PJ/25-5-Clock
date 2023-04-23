import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

// min 1
// max 60

const BreakLabel = (props: any) => {
    const decrementHandler = () => {
        if (props.breakLength > 1)
            props.setBreakLength((prev: number) => prev - 1);
    }

    const incrementHanler = () => {
        if (props.breakLength < 60)
            props.setBreakLength((prev: number) => prev + 1);
    }
    
    return (
        <section id="break-label">
            <h2>Break Length</h2>
            <button id="break-decrement" onClick={decrementHandler}><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="break-length">{props.breakLength}</p>
            <button id="break-increment" onClick={incrementHanler}> <FontAwesomeIcon icon={faCircleUp} /></button>
        </section >
    )
}

export default BreakLabel;