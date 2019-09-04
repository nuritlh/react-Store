import React from 'react';

import Services from '../../services/index';
import Spinner from '../Spinner';
import ItemCard from'./ItemCard';
import './items.css';

class ItemList extends React.Component {

    state = { 
        items : this.props.items,
    }

    toggleFavorites= (itemId) => {

        var favorites = (Services.loadFromStorage('favorites') === null) ? 
        [] : Services.loadFromStorage('favorites');

        let isFav = favorites.indexOf(itemId);
        if (isFav < 0) favorites.push(itemId);
        else favorites.splice(isFav, 1);
      
        Services.saveToStorage('favorites', favorites)
    }

    toggleCart= (itemId) => {

        var chart = (Services.loadFromStorage('chart') === null) ? 
        [] : Services.loadFromStorage('chart');

        let isInCart = chart.indexOf(itemId);
        if (isInCart < 0) chart.push(itemId);
        else chart.splice(isInCart, 1);
      
        Services.saveToStorage('chart', chart)
    }

    render() {
        if (this.props.items.length === 0) return  <Spinner />
        const items = this.props.items.map(item => {
            return <ItemCard  key={item.id} item={item} toggleFavorites={this.toggleFavorites} toggleCart={this.toggleCart}/>
        });
        return <div className="item-list">{items}</div>
    }
}

export default ItemList;
