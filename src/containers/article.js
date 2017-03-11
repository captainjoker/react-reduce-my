import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from '../components/article/content/content';
import {fetchArticle} from '../actions'

class Article extends Component{
    constructor(props){
        super(props);
    }


    componentWillMount(){
        if(!this.props.article.data.content){
            var id = window.location.hash.match(/.*\/(.*)/);
            id && id[1] && this.props.dispatch(fetchArticle(id[1]));
        }
    }

    render(){
        const data = this.props.article.data;
        return (
            <div>
                <Content mydata={data} myhtml={data.content}>
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