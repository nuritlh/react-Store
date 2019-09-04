import React from 'react';
import moment from 'moment';

import './modal.css';

const modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <div className="details-wrapper">
                    <div className="image content">
                        <div className="ui medium image">
                            <img src={props.item.urls.regular} alt="item poster"/>
                        </div>
                    </div>
                    <p></p>
                    <div className="description">
                        <p className="ui header">{props.item.alt_description}</p>
                        <p>Create at: {moment(props.item.created_at).format("MMM Do YY")}</p>
                        <p>Updated_at: {moment(props.item.updated_at).format("MMM Do YY")}</p>
                        <p>Likes: {props.item.likes}</p>
                        <p>Tags</p>
                        <ul>
                        {props.item.tags.map((tag, idx) => <li key={idx}>{tag.title}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button" onClick={props.close}>
                        close
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default modal;

