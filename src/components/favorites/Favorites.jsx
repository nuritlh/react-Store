import React from 'react';

import Services from '../../services/index';
import ItemCard from '../items/ItemCard';

class Favorites extends React.Component {
    state = { favorites: null }

    componentDidMount() {
        this.initFavorites()
    }

    initFavorites = () => {
        var favorites = Services.loadFromStorage('favorites')
        if (favorites === null) this.setState({ favorites : "no items yet" })
        else this.setState({ favorites })
    }

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>Favorites</div>
    }

}

export default Favorites;