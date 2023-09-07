import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

function StoreLocator() {
    return (
        <div data-testid="StoreLocator">
            <Header />
            <div>
                <Button location='Portland' />
                <Button location='Astoria' />
                <Button />
            </div>
            <Map />
        </div>
    );
}

export default StoreLocator;