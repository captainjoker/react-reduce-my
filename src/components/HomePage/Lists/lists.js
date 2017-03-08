import React,{Component} from 'react';
import {Link} from 'react-router';
import styles from './style.scss';

class Lists extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <Link to={'/topic/123'}>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/19220708?v=3&s=120" alt=""/>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Lists;