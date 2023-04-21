import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const BreakLabel = () => {
    return (
        <section id="break-label">
            <h2>Break Length</h2>
            <button id="break-decrement"><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="break-length">5</p>
            <button id="break-increment"><FontAwesomeIcon icon={faCircleUp} /></button>
        </section>
    )
}

export default BreakLabel;