import mainTypes from '../actions/actionTypes';

const initialState = {
    words: [],
    shuffledWords: [],
    user: {},
    lists: []
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
        default: {
            return state;
        }
    }}

export default mainReducer;