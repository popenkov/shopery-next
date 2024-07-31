import React from 'react';
import { render } from '@testing-library/react';
import { AppRouteNames } from '@/shared/model';
import { PAGE_ROUTES } from '@/shared/lib/constants/routes';

import { Breadcrumbs } from './';

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
    const { getAllByTestId, debug } = render(<Breadcrumbs items={crumbs} />);
    const homeLink = getAllByTestId('Breadcrumbs.link')[0];
    debug();
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/'); // assuming getRouteHome() returns '/'
  });

  it('renders breadcrumb items correctly', () => {
    const { getAllByRole, getAllByTestId } = render(<Breadcrumbs items={crumbs} />);
    const breadcrumbItems = getAllByTestId('Breadcrumbs.link');
    expect(breadcrumbItems).toHaveLength(crumbs.length);
    breadcrumbItems.forEach((item, index) => {
      if (index === 0) {
        return;
      }
      expect(item).toHaveTextContent(crumbs[index]);
    });
  });

  it('renders active breadcrumb item correctly', () => {
    const { getAllByTestId } = render(<Breadcrumbs items={crumbs} />);
    const activeItem = getAllByTestId('Breadcrumbs.link')[crumbs.length - 1];
    expect(activeItem).toHaveClass('active');
  });

  it('renders links correctly', () => {
    const { getAllByTestId } = render(<Breadcrumbs items={crumbs} />);
    const links = getAllByTestId('Breadcrumbs.link');

    links.forEach((link, index) => {
      if (index < crumbs.length - 1) {
        const currentPage = PAGE_ROUTES.filter((page) => {
          return page.name === crumbs[index];
        })[0];
        expect(link).toHaveAttribute('href', currentPage.href);
      }
    });
  });
});
