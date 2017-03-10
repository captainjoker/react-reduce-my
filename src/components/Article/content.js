/**
 * Created by Administrator on 2017/3/10.
 */
import React,{Component} from 'react';
import styles from './style.scss';

class Content extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.back}></div>
                    详情
                </header>
                <div className={styles.content} dangerouslySetInnerHTML={{__html:this.props.myhtml}}>
                </div>
            </div>
        )
    }
}

export  default  Content;
