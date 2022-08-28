export type isLoadingType = { isLoading: boolean }

const initState: isLoadingType = {isLoading: false}

export const loadingReducer = (state: isLoadingType = initState, action: LoadingAT): isLoadingType => {
    switch (action.type) {
        case 'SET-LOADING' : {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const LoadingAC = (isLoading: boolean) => ({type: 'SET-LOADING', isLoading} as const)

export type LoadingAT = ReturnType<typeof LoadingAC>
