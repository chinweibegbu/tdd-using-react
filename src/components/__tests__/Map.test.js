import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from '../Map';

describe("Map", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Map />, div);
    })

    it('renders an image', () => {
        render(<Map />);
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(1);
    })

    it('displays the none app when no params are given',() => {
        render(<Map />);
        const defaultMap = screen.getAllByRole("img", {src: "images/none.png"});
        expect(defaultMap.length).toBe(1);
    })
})