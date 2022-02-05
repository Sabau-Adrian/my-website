import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
        const { getByText } = render(<App />);
                                 
        const linkElement = getByText(/Save/i);
        expect(linkElement).toBeInTheDocument();
      });