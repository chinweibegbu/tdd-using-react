import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../MapChooser';
import axios from 'axios';

function StoreLocator() {
    const [currentMap, setCurrentMap] = useState('none.png');
    const [stores, setStores] = useState([]);

    const chooseStore = (e) => {
        setCurrentMap(mapChooser(e.target.value));
    }

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/data/stores.json');
        setStores(response.data.stores);
    }

    useEffect(() => {
        fetchData();
    }, []);

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