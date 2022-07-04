import * as ActionType from "../ActionType"


const initialState = {
    isLoading: false,
    medicine : [],
    error: ''
}

export const medicinereducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    
    switch (action.type) {
        case ActionType.GET_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: action.payload,
                error: ''
            }

        default:
            return state
    }
}