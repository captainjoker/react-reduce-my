import React, {Component, PropTypes} from 'react';
import Tab from './Tab';
import styles from './style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.tabs);
        return (
            <div>
                <header className={styles.header}>
                    NodeJS论坛
                    <div>
                        <a>
                            <ul>
                                {this.props.tabs.map((tab,i)=>{
                                    return <Tab tab={tab} key={'myKey'+i}></Tab>
                                })}
                            </ul>
                        </a>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;

