import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/HomePage/Header/header';
import Lists from '../components/HomePage/Lists/lists';
import {selectTab,fetchItems} from '../actions';

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

    componentWillMount(){
        const {dispatch,selectedTab} = this.props;
        dispatch(fetchItems(selectedTab));
    }

    handleClick(tab){
        const {dispatch} = this.props;
        console.log(this);
        dispatch(selectTab(tab));
        dispatch(fetchItems(tab));
    }

    render() {
        console.log(this.props.tabData);
        return (
            <div>
                <Header onClick={this.handleClick.bind(this)} tabs={this.tabs} />
                <Lists items={this.props.tabData.items}></Lists>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {homePage} = state;
    const {selectedTab,tabData} = homePage;
    return {selectedTab,tabData}
}

export default connect(mapStateToProps)(HomePage);
