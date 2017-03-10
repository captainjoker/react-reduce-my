/**
 * Created by Administrator on 2017/3/3.
 */
import {SELECT_TAB, RECEIVE_TOPICS} from '../actions';

const selectedTab = (state, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.tab
        default:
            return state;
    }
};

const tabItem = (state = {isFetching: false, page: 0, items: []}, action) => {
    switch (action.type) {
        case RECEIVE_TOPICS:
            return {
                ...state,
                isFetching: false,
                page: action.page,
                items: action.items,
                limit: action.limit
            };
        default:
            return state;
    }
};

const homepage = (state={selectedTab:'all',tabData:{}},action) => {
    if(state){
        const _selectedTab = selectedTab(state.selectedTab,action);
        const _tabItem = tabItem(state.tabData,action);
        return {...state,selectedTab:_selectedTab,tabData:_tabItem}
    }
    return state;
};

export default homepage;