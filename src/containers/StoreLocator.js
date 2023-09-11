import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../MapChooser';

function StoreLocator() {
    const [currentMap, setCurrentMap] = useState('none.png')

    const chooseStore = (e) => {
        setCurrentMap(mapChooser(e.target.value));
    }

    const stores = [{
        'location': 'Portland',
        'address': '123 Portland Dr'
    }, {
        'location': 'Astoria',
        'address': '123 Astoria Dr'
    }, {
        'location': '',
        'address': ''
    }];

    const storeButtons = stores.map((store, id) => {
        return <Button handleClick={chooseStore} key={id} location={store.location} />
    });

    return (
        <div data-testid="StoreLocator">
            <Header />
            <div>
                {storeButtons}
            </div>
            <Map imageName={currentMap} />
        </div>
    );
}

export default StoreLocator;