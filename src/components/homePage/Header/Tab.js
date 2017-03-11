import React, {Component, PropTypes} from 'react';
import styles from './style.scss';

class Tab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={styles.titleli + " "+ (this.props.tab.filter==this.props.select ? styles.selected:"")} filter={this.props.tab.filter}>
                {this.props.tab.title}
            </li>
        )
    }
}

export default Tab;