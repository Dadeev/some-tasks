import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
     props.deleteAffairCallback(_id)
    }

    return (
        <div>
            <button onClick={() =>deleteCallback(props.affair._id)}>X</button>
            {props.affair.name}
        </div>
    )
}

export default Affair
