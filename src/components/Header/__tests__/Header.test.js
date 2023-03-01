import Header from '..';

import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');

describe('Header', () => {
  it('renders Header component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to all events page upon click on header icon', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const element = render(<Header />);
    const button = element.getByText('EVENTIFY');
    button.click();
    expect(navigate).toBeCalledWith('/');
  });
});
