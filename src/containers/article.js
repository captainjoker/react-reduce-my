import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from '../components/Article/content';

class Article extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div>
                <Content myhtml={this.props.article.data.content}>
                </Content>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {article,homepage} = state;
    return {article,homepage}
}

export default connect(mapStateToProps)(Article);