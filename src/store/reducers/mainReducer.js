import mainTypes from '../actions/actionTypes';

const initialState = {
    words: [],
}

function mainReducer(state = initialState, action = {}) {
    switch (action.type) {
        case mainTypes.WRITE_WORDS: {
            return {...state, words: action.payload};
        }
        default: {
            console.log('unknown action type', action)
            return state;
        }
    }}

export default mainReducer;