import { ADD } from "./actions"
import { fromJS } from 'immutable'
const initState = fromJS({
    num: 0,
});

function addNum(state = initState, action) {
    switch (action.type) {
        case ADD:
            return state.set('num', action.num);
        default:
            return state
    }
}

export default addNum
