import React, {Component} from 'react';
import { render } from 'react-dom';

class App extends Component{
    render(){
        return(
            <div>react测试中12345678</div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);