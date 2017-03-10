import React,{Component} from 'react';
import {Link} from 'react-router';
import styles from './style.scss';
import {getTime} from '../../../utils/utils'

class Lists extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.container}>
                {this.props.items && this.props.items.map((data,index)=>{
                    return <Link to={'/topic/${id}'} className={styles.contentLink} key={'listkey'+index}>
                        <div className={styles.content}>
                            <img src={data.author.avatar_url} alt="" className={styles.userlogo}/>
                            <div>
                                <div>
                                    <span className={data.top ? styles.top : styles.queans}>{data.top ? '置顶':'问答'}</span>
                                    <span className={styles.title}>{data.title}</span>
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.write}>{data.reply_count}</span>
                                    <span>/</span>
                                    <span className={styles.read}>{data.visit_count}</span>
                                    <span className={styles.time}>{getTime(data.last_reply_at)}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                })}

            </div>
        )
    }
}

export default Lists;