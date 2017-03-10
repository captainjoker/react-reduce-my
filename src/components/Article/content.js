/**
 * Created by Administrator on 2017/3/10.
 */
import React,{Component} from 'react';
import styles from './style.scss';

class Content extends Component{
    constructor(props){
        super(props);
    }

    handlerClick(){
        history.back();
    }

    render(){
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.back} onClick={this.handlerClick}></div>
                    详情
                </header>
                <div className={`${styles.content} markdown-body`} dangerouslySetInnerHTML={{__html:this.props.myhtml}}>
                </div>
            </div>
        )
    }
}

export  default  Content;
