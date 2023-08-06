import mainTypes from '../actions/actionTypes';

const initialState = {}

function mainReducer(state = initialState, action = {}) {
    switch (action.type) {
        case mainTypes.DO_SOMETHING: {
            return {...state, productList: action.payload};
        }
        default: {
            return state;
        }
    }}

export default mainReducer;