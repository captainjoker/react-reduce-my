/**
 * Created by Administrator on 2017/3/3.
 */
import {SELECT_TAB, RECEIVE_TOPICS} from '../actions';

const selectedTab = (state = {selectedTab: 'all'}, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                selectedTab: action.tab
            };
        default:
            return state;
    }
};

// const tabItem = (state = {isFetching: false, page: 0, items: []}, action) => {
//     switch (action.type) {
//         case RECEIVE_TOPICS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 page: action.page,
//                 items: action.items,
//                 limit: action.limit
//             };
//         default:
//             return state;
//     }
// };

export default selectedTab;