import React,{Component} from 'react';
import styles from './style.scss';

class Reply extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={styles.reply}>
                <div className={styles.replyCount}>
                    回复：{this.props.replyCount}
                </div>
                <div className={styles.replyContent}>
                    
                </div>
            </div>
        )
    }
}

export  default Reply;