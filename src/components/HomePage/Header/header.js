import React, {Component, PropTypes} from 'react';
import Tab from './Tab';
import styles from './style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            select : 'all'
        };
    }

    handlerChange(e){
        this.setState({select:e.target.getAttribute('filter')});
        this.props.onClick && this.props.onClick(e.target.getAttribute('filter'));
    }

    render() {
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.title}>NodeJS论坛</div>
                    <div>
                        <ul onClick={this.handlerChange.bind(this)}>
                            {this.props.tabs.map((tab,i)=>{
                                return <Tab tab={tab} key={'myKey'+i} select={this.state.select}></Tab>
                            })}
                        </ul>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;

