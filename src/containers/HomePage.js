import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/HomePage/Header/header';

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

    render() {
        return (
            <Header tabs={this.tabs} />

        )
    }
}

function mapStateToProps(state) {
    const {login} = state;
    return {login}
}

export default connect(mapStateToProps)(HomePage);
