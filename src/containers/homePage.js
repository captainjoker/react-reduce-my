import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/homePage/Header/header';
import Lists from '../components/homePage/Lists/lists';
import {selectTab, fetchItems, fetchArticle} from '../actions';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    tabs = [
        {
            title: '全部',
            filter: 'all',
        },
        {
            title: '精华',
            filter: 'good',
        },
        {
            title: '分享',
            filter: 'share',
        },
        {
            title: '问答',
            filter: 'ask',
        },
        {
            title: '招聘',
            filter: 'job',
        }
    ];

    scrolling(e) {
        if (document.body.clientHeight === document.body.scrollTop + document.documentElement.clientHeight) {
            const {dispatch, selectedTab, tabData} = this.props;
            if(!tabData.isFetching){
                dispatch(fetchItems(selectedTab, ++tabData.page));
            }
        }

    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.scrolling);
        window.onscroll = null;
    }

    componentWillMount() {
        const {dispatch, selectedTab,tabData} = this.props;
        if(!tabData.items || !tabData.items.length){
            dispatch(fetchItems(selectedTab));
        }
        // window.addEventListener('scroll', this.scrolling);
        window.onscroll = this.scrolling.bind(this);
    }

    handleClick(tab) {
        if (tab === this.props.selectedTab) {
            return false;
        }
        const {dispatch} = this.props;
        dispatch(selectTab(tab));
        dispatch(fetchItems(tab));
        document.body.scrollTop = 0;
    }

    contentHandlerClick(id) {
        this.props.dispatch(fetchArticle(id));
    }

    render() {
        return (
            <div>
                <Header onClick={this.handleClick.bind(this)} tabs={this.tabs} select={this.props.selectedTab}/>
                <Lists items={this.props.tabData.items} onClick={this.contentHandlerClick.bind(this)}>

                </Lists>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {homePage} = state;
    const {selectedTab, tabData} = homePage;
    return {selectedTab, tabData}
}

export default connect(mapStateToProps)(HomePage);
