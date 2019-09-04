import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ItemList from './items/ItemList';

class App extends React.Component {

    state = { 
        items: [],
        favorites: []
     };

    componentDidMount() {
        this.initItems();
    }

    initItems = async () => {
        const response = await unsplash
        .get('/search/photos', {
            params: {query: "dogs"},
        })
        this.setState({ items : response.data.results},
            () => console.log(this.state.items)
            )
    }

    onSearchSubmit = async term => {
        const response = await unsplash
        .get('/search/photos', {
            params: {query: term},
        })
        this.setState({ items : response.data.results},
            () => console.log(this.state.items)
            )
    }

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <ItemList items={this.state.items} favorites={this.state.favorites}/>
        </div>
    }
}

export default App;