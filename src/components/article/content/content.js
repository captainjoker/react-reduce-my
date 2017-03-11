/**
 * Created by Administrator on 2017/3/10.
 */
import React,{Component} from 'react';
import styles from './style.scss';
import {getTime} from '../../../utils/utils'

class Content extends Component{
    constructor(props){
        super(props);
    }

    handlerClick(){
        history.back();
    }

    render(){
        const {myhtml,mydata} = this.props;
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.back} onClick={this.handlerClick}></div>
                    <img src={mydata.author && mydata.author.avatar_url} alt="作者"/>
                </header>
                <div className={styles.info}>
                    {mydata.title}
                    <div className={styles.author}>
                        <span>作者：{mydata.author && mydata.author.loginname}</span>
                        <span style={{paddingLeft:'1rem'}}>浏览次数：{mydata.visit_count}</span>
                        <span className={styles.createtime}>发布时间：{getTime(mydata.create_at)}</span>
                    </div>
                </div>
                <div className={`${styles.content} markdown-body`} dangerouslySetInnerHTML={{__html:myhtml}}>
                </div>
            </div>
        )
    }
}

export  default  Content;
