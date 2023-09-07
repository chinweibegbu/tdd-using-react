import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", function () {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('renders a StoreLocator', () => {
    render(<App />);
    expect(screen.getByTestId("StoreLocator")).toBeInTheDocument();
  })

});