import {initialPeopleType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckAT = {
    type: 'check'
    payload: number
}

type ActionsType = SortAT | CheckAT

export const homeWorkReducer = (state: initialPeopleType[], action: ActionsType): initialPeopleType[] => {
    switch (action.type) {
        case 'sort' :
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        case 'check':
            return state.filter(p => p.age >= action.payload)
        default:
            return state
    }
}