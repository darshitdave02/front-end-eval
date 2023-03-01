import Footer from '..';

import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');

describe('Header', () => {
  it('renders Header component', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
