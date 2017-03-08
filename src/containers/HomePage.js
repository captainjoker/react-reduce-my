import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/HomePage/Header/header';
import Lists from '../components/HomePage/Lists/lists';

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
            <div>
                <Header tabs={this.tabs} />
                <Lists></Lists>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {homePage} = state;
    return {homePage}
}

export default connect(mapStateToProps)(HomePage);
