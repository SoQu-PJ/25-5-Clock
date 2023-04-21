import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const SessionLabel = () => {
    return (
        <section id="session-label">
            <h2>Session Length</h2>
            <button id="session-decrement"><FontAwesomeIcon icon={faCircleDown} /></button>
            <p id="session-length">25</p>
            <button id="session-increment"><FontAwesomeIcon icon={faCircleUp} /></button>
        </section>
    )
}

export default SessionLabel;