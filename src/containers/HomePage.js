import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/HomePage/Header/header';
import Lists from '../components/HomePage/Lists/lists';
import {selectTab} from '../actions';

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

    handleClick(tab){
        const {dispatch,selectedTab} = this.props;
        dispatch(selectTab(tab));
        console.log(this);
    }

    render() {
        return (
            <div>
                <Header onClick={this.handleClick.bind(this)} tabs={this.tabs} />
                <Lists ></Lists>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {homePage} = state;
    const {selectedTab} = homePage;
    return {selectedTab}
}

export default connect(mapStateToProps)(HomePage);
