import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Header />, div);
    })

    it('renders a logo', () => {
        render(<Header />);
        const logoImages = screen.getAllByRole('img', {src: "images/wired-brain-coffee-logo.png"});
        expect(logoImages.length).toBe(1);
    })
})