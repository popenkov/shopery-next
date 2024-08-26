import React from 'react';
import { render } from '@testing-library/react';
import { SocialShare } from './SocialShare';
import * as api from '../api/getSocialData';
import { TSocialLink } from '../model';

describe('SocialShare component', () => {
  const socialLinks: TSocialLink[] = [
    {
      id: 'FacebookIcon',
      icon: 'FacebookIcon',
      path: '/fb',
    },
    { id: 'TwitterIcon', icon: 'TwitterIcon', path: '/tw' },
    {
      id: 'PinterestIcon',
      icon: 'PinterestIcon',
      path: '/pint',
    },
    { id: 'InstagramIcon', icon: 'InstagramIcon', path: '/inst' },
  ];

  it('renders social share text', () => {
    const { getByText } = render(<SocialShare />);
    expect(getByText('Share:')).toBeInTheDocument();
  });

  it('renders social links', () => {
    const { getAllByRole } = render(<SocialShare />);
    expect(getAllByRole('link')).toHaveLength(socialLinks.length);
  });

  it('renders social icons', () => {
    const { getAllByTestId } = render(<SocialShare />);
    expect(getAllByTestId('test-icon')).toHaveLength(socialLinks.length);
  });

  it('calls getSocialData on render', () => {
    const getSocialDataSpy = jest.spyOn(api, 'getSocialData').mockReturnValue(socialLinks);
    render(<SocialShare />);
    expect(getSocialDataSpy).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-class';
    const { container } = render(<SocialShare className={customClassName} />);

    expect(container.querySelector(`.${customClassName}`)).toBeInTheDocument();
  });
});
