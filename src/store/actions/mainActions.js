import mainTypes from './actionTypes';

export const writeWordsAC = (data) => ({
    type: mainTypes.WRITE_WORDS,
    payload: data,
});

export const shuffleWordsAC = () => ({
    type: mainTypes.SHUFFLE_WORDS,
    payload: null,
})

export const fetchWords = () => {
    return (dispatch) => {
        // const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : '';
        const host = 'https://lexeis.pchapl.dev'
        fetch(host+'/api/words').then(response => response.json())
            .then(result => dispatch(writeWordsAC(result)))
    }
}

export const signIn = (login, pass) => {
    return (dispatch) => {
        const data = {
            username: login,
            password: pass
        };
        fetch('https://lexeis.pchapl.dev/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(result => dispatch(signInAC(result)))
    }
}

export const signInAC = (data) => ({
    type: mainTypes.SIGN_IN,
    payload: data
})

export const getLists = (token) => {
    return (dispatch) => {
        fetch('https://lexeis.pchapl.dev/api/lists',
            {
                headers: {
                    Authorization: token
                }
            }).then(response => response.json())
            .then(result => dispatch(getListsAC(result)))
    }
}

export const getListsAC = (data) => ({
    type: mainTypes.GET_LISTS,
    payload: data
})