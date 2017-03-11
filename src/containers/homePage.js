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

    componentWillMount() {
        const {dispatch, selectedTab} = this.props;
        dispatch(fetchItems(selectedTab));
    }

    handleClick(tab) {
        const {dispatch} = this.props;
        dispatch(selectTab(tab));
        dispatch(fetchItems(tab));
    }

    contentHandlerClick(id) {
        this.props.dispatch(fetchArticle(id));
    }

    render() {
        console.log(this.props.tabData);
        return (
            <div>
                <Header onClick={this.handleClick.bind(this)} tabs={this.tabs}/>
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
