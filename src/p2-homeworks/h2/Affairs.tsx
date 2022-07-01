import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // keys are very necessary when we wanna use method map
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (name: FilterType) => {
        props.setFilter(name)
    }
    const setHigh = (name: FilterType) => {
        props.setFilter(name)
    }
    const setMiddle = (name: FilterType) => {
        props.setFilter(name)
    }
    const setLow = (name: FilterType) => {
        props.setFilter(name)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={() => setAll('all')}>All</button>
            <button onClick={() => setHigh('high')}>High</button>
            <button onClick={() => setMiddle('middle')}>Middle</button>
            <button onClick={() => setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
