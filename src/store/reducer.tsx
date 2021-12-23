import { Store } from "./store"
import { ADD_INCRIMENT, RESET_INCRIMENT } from "./actions"

export const reducer = (state: Store, actions: any) => {
    switch (actions.type) {
        case ADD_INCRIMENT:
            state = { ...state, number: state.number + actions.payload }
            return state;
        case RESET_INCRIMENT:
            state = { ...state, number: actions.payload }
            return state;
        default:
            return state;
    }
}