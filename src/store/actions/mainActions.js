import mainTypes from './actionTypes';

export const writeWordsAC = (data) => ({
    type: mainTypes.WRITE_WORDS,
    payload: data,
});

export const fetchWords = () => {
    return (dispatch) => {
        const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : '';
        fetch(host+'/api/words').then(response => response.json())
            .then(result => dispatch(writeWordsAC(result)))
    }
}