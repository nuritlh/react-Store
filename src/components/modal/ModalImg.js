import React from 'react';

import './modal.css';

const ModalImg = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <div className="details-wrapper">
                    <div className="image content">
                        <div className="ui medium image">
                            <img src={props.item.urls.regular} alt="movie poster"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ModalImg;

