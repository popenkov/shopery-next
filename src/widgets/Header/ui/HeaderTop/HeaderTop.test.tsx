import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';

import { TUser } from '@/entities/User';
import { getRouteLogin, getRouteRegistation } from '@/shared/lib/constants';
import { renderWithStore } from '@/shared/lib/tests';

import { HeaderTop } from './HeaderTop';

jest.mock('../../../../entities/User', () => ({
  selectAuthData: jest.fn(),
}));

jest.mock('../UserMenu', () => ({
  __esModule: true,
  default: () => <div>User Menu</div>,
}));

describe.skip('HeaderTop component', () => {
  it('renders location and actions', () => {
    const { getByTestId } = renderWithStore(<HeaderTop />);
    expect(getByTestId('header-top-location')).toBeInTheDocument();
    expect(getByTestId('header-top-login-link')).toBeInTheDocument();
    expect(getByTestId('header-top-register-link')).toBeInTheDocument();
  });

  //   todo
  it.skip('renders user menu when authData is present', () => {
    const user: TUser = {
      id: '1',
      photo: '',
      name: 'Tony',
      role: 'user',
      avatar: '',
    };
    const selectAuthData = jest.fn();
    selectAuthData.mockReturnValue(user);
    const { getByText } = renderWithStore(<HeaderTop />);
    expect(getByText('User Menu')).toBeInTheDocument();
  });

  it('renders currency and language switchers', () => {
    const { getByTestId } = renderWithStore(<HeaderTop />);
    expect(getByTestId('HeaderTop.CurrencySwitcher')).toBeInTheDocument();
    expect(getByTestId('HeaderTop.LangSwitcher')).toBeInTheDocument();
  });

  it('calls login link when clicked', () => {
    const { getByTestId } = renderWithStore(<HeaderTop />);
    const loginLink = getByTestId('header-top-login-link');
    fireEvent.click(loginLink);
    waitFor(() => expect(window.location.href).toBe(getRouteLogin()));
  });

  it('calls registration link when clicked', async () => {
    const { getByTestId } = renderWithStore(<HeaderTop />);
    const registrationLink = getByTestId('header-top-register-link');
    fireEvent.click(registrationLink);

    waitFor(() => expect(window.location.href).toBe(getRouteRegistation()));
  });
});
