import mainTypes from '../actions/actionTypes';

const initialState = {
    words: [],
    shuffledWords: [],
    user: {}, //id, name, token
    lists: [],
    errors: {},
}

function mainReducer(state = initialState, action = {}) {
    switch (action.type) {
        case mainTypes.WRITE_WORDS: {
            return {...state, words: action.payload};
        }
        case mainTypes.SHUFFLE_WORDS: {
            const copyWords = [...state.words]
            for (let i = copyWords.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [copyWords[i], copyWords[j]] = [copyWords[j], copyWords[i]];
            }
            return {...state, shuffledWords: copyWords}
        }
        case mainTypes.SIGN_IN: {
            return {...state, user: action.payload}
        }
        case mainTypes.GET_LISTS: {
            return {...state, lists: action.payload}
        }
        case mainTypes.SIGN_IN_ERROR: {
            return {...state, errors: {...state.errors, loginError: action.payload }}
        }
        case mainTypes.GET_LIST: {
            return {...state, words: action.payload}
        }
        case mainTypes.LOGOUT: {
            return {...state, user: {}}
        }
        default: {
            return state;
        }
    }}

export default mainReducer;