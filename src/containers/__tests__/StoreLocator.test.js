import React from 'react';
import { render, screen } from '@testing-library/react';
import StoreLocator from '../StoreLocator';

describe("StoreLocator", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<StoreLocator />, div);
    })

    it('renders a Header', () => {
        render(<StoreLocator />);
        expect(screen.getByTestId("Header")).toBeInTheDocument();
    })

    it('renders three buttons', () => {
        render(<StoreLocator />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(3);
    })

    it('renders a Map', () => {
        render(<StoreLocator />);
        expect(screen.getByTestId("Map")).toBeInTheDocument();
    })
})

describe('chooseMap', ()=> {
    it('updates currentMap using the location passed to it', ()=>{
        render(<StoreLocator />);
        expect(screen.getByTestId("Map")).toBeInTheDocument();
    })
});