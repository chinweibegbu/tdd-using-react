import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Map from '../Map';

describe("Map", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Map />, div);
    })

    it('renders an image', () => {
        render(<Map />);
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(1);
    })
})