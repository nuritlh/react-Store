import React from 'react';

import Services from '../../services/index';
import Modal from '../modal/modal';
import ModalImg from '../modal/ModalImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimes, faHeart, faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class ItemCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            spans: 0,
            isShowing: false,
            isExtendsImg: false,
            isFavirite: false,
            isInCart : false
        };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load',this.setSpans);
        this.setState({ isFavirite : this.props.isFavirite})
        this.userSetup();
    }

    userSetup = () => {
        const itemId = this.props.item.id;
        var favorites = Services.loadFromStorage('favorites')
        if (favorites === null) this.setState({ isFavirite : false })
        else {
            let isFav = favorites.indexOf(itemId);
            if (isFav >= 0) this.setState({ isFavirite : true })
        }
        var chart = Services.loadFromStorage('chart')
        if (chart === null) this.setState({ isInCart : false })
        else {
            let isInCart = chart.indexOf(itemId);
            if (isInCart >= 0) this.setState({ isInCart : true })
        }
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) + 15;
        this.setState({spans});
    }

    extendImg = () => {
        this.setState({
            isExtendsImg: true
        });
    }

    closeExtendImg = () => {
        this.setState({
            isExtendsImg: false
        });
    }

    renderModalImg = () => {
        if(this.state.isExtendsImg) {
          return (
            <ModalImg
              className="modal"
              show={this.state.isExtendsImg}
              close={this.closeExtendImg}
              item={this.props.item}>
            </ModalImg>
          )
        }
      }

    renderModal = () => {
        if(this.state.isShowing) {
          return (
            <Modal
              className="modal"
              show={this.state.isShowing}
              close={this.closeModalHandler}
              item={this.props.item}>
            </Modal>
          )
        }
      }

      openModalHandler = () => {
        this.setState({
            isShowing: true
        });
      }

      closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
      }
      
      toggleFavorites= () => {
        this.props.toggleFavorites(this.props.item.id);
        this.setState({
            isFavirite: !this.state.isFavirite
        });
      }

      toggleCart = () => {
        this.props.toggleCart(this.props.item.id);
        this.setState({
            isInCart: !this.state.isInCart
        });
      }

    render() {
        const {urls,description, alt_description, likes} = this.props.item;
        return (
            <>
                <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <div>
                        <img
                            // onMouseEnter={this.extendImg}
                            ref={this.imageRef}
                            src={urls.regular}
                            alt={alt_description}
                        />
                    </div>
                    <div className="details">
                        <p className="item-description">Description: {description}</p>
                        <p>{alt_description}</p>
                        <p>numbers of likes: {likes}</p>
                    </div>
                    <div className="ui buttons">
                        <button className="ui button" onClick={this.openModalHandler}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                        <button className="ui button" onClick={this.toggleCart}>
                            {(this.state.isInCart) && <FontAwesomeIcon icon={faTrashAlt} />} 
                            {!this.state.isInCart && <FontAwesomeIcon icon={faShoppingCart} />}
                        </button>
                        <button className="ui button" onClick={this.toggleFavorites}>
                            {(this.state.isFavirite) && <FontAwesomeIcon icon={faTimes} />} 
                            {!this.state.isFavirite && <FontAwesomeIcon icon={faHeart} />} 
                        </button>
                    </div>
                </div>
                {this.renderModalImg()}
                {this.renderModal()}
            </>
        )
    }
}
export default ItemCard;