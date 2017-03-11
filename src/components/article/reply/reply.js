import React,{Component} from 'react';
import styles from './style.scss';
import {getTime} from '../../../utils/utils';

class Reply extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {replyCount,replyData=[]} = this.props;
        return (
            <div className={styles.reply}>
                <div className={styles.replyCount}>
                    回复：{replyCount}
                </div>
                <div className={styles.replyContent}>
                    {replyData.map((value,index)=>{
                        return (
                            <div  key={`replyKey${index}`} style={{borderBottom:'1px solid #f6f6f6'}}>
                                <div className={styles.author}>
                                    <img src={value.author.avatar_url} alt="评论者"/>
                                    <span style={{paddingLeft:'1rem',color:'#666',fontSize:'0.75rem'}}>{value.author.loginname}</span>
                                    <span style={{paddingLeft:'.5rem',color:'#08c',fontSize:'0.75rem'}}>{index+1}楼</span>
                                    <span style={{color:'#08c',fontSize:'0.75rem'}}>•{getTime(value.create_at)}</span>
                                </div>
                                <div dangerouslySetInnerHTML={{__html:value.content}}>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export  default Reply;