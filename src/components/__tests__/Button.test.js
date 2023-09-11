import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe("Button", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Button />, div);
    })

    it('renders a button', () => {
        render(<Button />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(1);
    })
})

describe("When a location is not passed to it", () => {
    it("displays the location", () => {
        render(<Button location={undefined}/>)
        const locationName = screen.getByRole("button", {class: "location-button"})
        expect(locationName.innerHTML).toEqual('All Locations');
    })
})

describe("When a location is passed to it", () => {
    it("displays the location", () => {
        render(<Button location='Portland'/>)
        const locationName = screen.getByRole("button", {class: "location-button"})
        expect(locationName.innerHTML).toEqual('Portland');
    })
})