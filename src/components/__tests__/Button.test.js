import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe("Button", function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    })

    it('renders a button', () => {
        render(<Button />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(1);
    })
})