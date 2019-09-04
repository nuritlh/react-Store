import React from 'react';
import {withRouter} from 'react-router-dom';

class NotFound extends React.Component {

    handelClick = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1>Not found</h1>
                <button className="ui button" onClick={this.handelClick}>back to home page</button>
            </div>
        )
    }
}



export default withRouter(NotFound);