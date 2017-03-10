import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from '../components/Article/content';
import {fetchArticle} from '../actions'
import styles from '../components/Article/style.scss';

class Article extends Component{
    constructor(props){
        super(props);
    }

    handlerClick(){
        history.back();
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
                <header className={styles.header}>
                    <div className={styles.back} onClick={this.handlerClick}></div>
                    详情
                </header>
                <div className={styles.authorInfo}>
                    {data.title}
                </div>
                <Content myhtml={data.content}>
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