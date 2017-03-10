/**
 * Created by Administrator on 2017/3/10.
 */
import {RECEIVE_ARTICLE} from '../actions';

const Article = (state = {data: {}}, action) => {
    switch (action.type) {
        case RECEIVE_ARTICLE:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

export default Article;