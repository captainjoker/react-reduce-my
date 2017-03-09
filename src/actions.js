import fetch from 'isomorphic-fetch';

export const SELECT_TAB = 'SELECT_TAB';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const selectTab = tab => ({
    type: SELECT_TAB,
    tab
});

export const receiveTopics = (tab, items, page, limit) => ({
    type: RECEIVE_TOPICS,
    tab,
    items,
    page,
    limit
});

export const fetchItmes = (tab, page = 1, limit = 20) => {
    return dispatch => {
        fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTopics(tab, json.data, page, limit)))
    }
};