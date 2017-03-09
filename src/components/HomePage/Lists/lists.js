import React,{Component} from 'react';
import {Link} from 'react-router';
import styles from './style.scss';

class Lists extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className={styles.container}>
                <Link to={'/topic/123'} className={styles.contentLink}>
                    <div className={styles.content}>
                        <img src="https://avatars.githubusercontent.com/u/19220707?v=3&s=120" alt="" className={styles.userlogo}/>
                        <div>
                            <div>
                                <span className={styles.top}>置顶</span>
                                <span className={styles.title}>Node.js 2016回顾以及2017展望以及2018的期望以及2019的愿望</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.write}>16</span>
                                <span>/</span>
                                <span className={styles.read}>175</span>
                                <span className={styles.time}>3小时前</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Lists;