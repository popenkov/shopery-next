import React from 'react';
import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import { Breadcrumbs } from './';
import { AppRouteNames } from '@/shared/model';

const crumbs: AppRouteNames[] = [
  AppRouteNames.HOME,
  AppRouteNames.CATALOG,
  AppRouteNames.NOT_FOUND,
];

describe('Breadcrumbs component', () => {
  it('renders correctly', () => {
    const { container } = render(<Breadcrumbs items={crumbs} />);
    expect(container).toMatchSnapshot();
  });

  it('renders home link correctly', () => {
    const { getByRole, getByTestId } = render(<Breadcrumbs items={crumbs} />);
    const homeLink = getByTestId('Breadcrumbs.homeLink');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/'); // assuming getRouteHome() returns '/'
  });

  it('renders breadcrumb items correctly', () => {
    const { getAllByRole } = render(<Breadcrumbs items={crumbs} />);
    const breadcrumbItems = getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(crumbs.length);
    breadcrumbItems.forEach((item, index) => {
      expect(item).toHaveTextContent(crumbs[index]);
    });
  });

  it('renders active breadcrumb item correctly', () => {
    const { getAllByRole } = render(<Breadcrumbs items={crumbs} />);
    const activeItem = getAllByRole('link')[crumbs.length - 1];
    expect(activeItem).toHaveClass('active');
  });

  it('renders links correctly', () => {
    const { getAllByRole } = render(<Breadcrumbs items={crumbs} />);
    const links = getAllByRole('link');
    links.forEach((link, index) => {
      if (index < crumbs.length - 1) {
        expect(link).toHaveAttribute('href', crumbs[index + 1]); // assuming PAGE_ROUTES has correct hrefs
      }
    });
  });
});
