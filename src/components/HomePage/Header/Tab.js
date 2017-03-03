import React, {Component, PropTypes} from 'react';
import styles from './style.scss';

class Tab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.tab)

        return (
            <li className="" value={this.props.tab.filter}>
                {this.props.tab.title}
            </li>
        )
    }
}

export default Tab;