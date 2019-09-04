import React from 'react';

const Spinner = (props) => {

    const style = {
        position: 'relative',
        height: '60vh'
    }

    return (
        <div className="ui active dimmer" style={style}>
            <div className="ui big text loader">
                <p>{props.message}</p>
            </div>
        </div>
    )
};

Spinner.defaultProps = {
    message : 'Loading...'
}
export default Spinner;