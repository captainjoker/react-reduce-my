import React , {Component} from 'react';
import { connect } from 'redux';
class App extends Component{
    render() {
        return (
            <div>react测试中12345678</div>
        )
    }
}

// export default connect(state=>{
//     const {login,profile} = state;
//     return {login,profile}
// })(App)
export default App;
