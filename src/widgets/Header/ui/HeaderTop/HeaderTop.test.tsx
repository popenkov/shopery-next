// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { HeaderTop } from './HeaderTop';
// import { selectAuthData, TUser, userReducer } from '@/entities/User';

// const user: TUser = {
//   id: '1',
//   photo: '',
//   name: 'Tony',
//   role: 'user',
//   avatar: '',
// };

// const options = {
//   initialState: {
//     user: {
//       authData: user,
//     },
//   },
//   asyncReducers: {
//     user: userReducer,
//   },
// };

// jest.mock('@/entities/User/models/selectors/user', () => ({
//   selectAuthData: jest.fn(),
// }));

// jest.mock('../UserMenu', () => ({
//   __esModule: true,
//   default: () => <div>User Menu</div>,
// }));

// describe('HeaderTop component', () => {
//   it('renders location and actions', () => {
//     const { getByText } = render(<HeaderTop />);
//     expect(getByText('Store Location: Lincoln- 344, Illinois, Chicago, USA')).toBeInTheDocument();
//     expect(getByText('Sign in')).toBeInTheDocument();
//     expect(getByText('Sign up')).toBeInTheDocument();
//   });

//   it('renders user menu when authData is present', () => {
//     selectAuthData.mockReturnValue(user);
//     const { getByText } = render(<HeaderTop />);
//     expect(getByText('User Menu')).toBeInTheDocument();
//   });

//   it('renders currency and language switchers', () => {
//     const { getByText } = render(<HeaderTop />);
//     expect(getByText('Currency Switcher')).toBeInTheDocument();
//     expect(getByText('Language Switcher')).toBeInTheDocument();
//   });

//   it('calls login link when clicked', () => {
//     const { getByText } = render(<HeaderTop />);
//     const loginLink = getByText('Sign in');
//     fireEvent.click(loginLink);
//     expect(window.location.href).toBe(getRouteLogin());
//   });

//   it('calls registration link when clicked', () => {
//     const { getByText } = render(<HeaderTop />);
//     const registrationLink = getByText('Sign up');
//     fireEvent.click(registrationLink);
//     expect(window.location.href).toBe(getRouteRegistation());
//   });
// });
