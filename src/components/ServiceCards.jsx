import { useState } from 'react'

const Cards = (props) => {

    const [flip, setFlip] = useState(true);
    return (
        <div className={`card ${flip ? 'flip' : ''}`} id={props.id} onClick={() => setFlip(!flip)}>
            {/* <img src={icon} alt="Service-icon" width={200} height={200} /> */}
            <div className="info">
                {flip ? <h3>{props.title}</h3> : <h3>{props.answer}</h3>}
            </div>
        </div>
    )
}

export default Cards