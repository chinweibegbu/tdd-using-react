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

    it('renders two buttons', () => {
        render(<StoreLocator />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(2);
    })

    it('renders a Map', () => {
        render(<StoreLocator />);
        expect(screen.getByTestId("Map")).toBeInTheDocument();
    })
})