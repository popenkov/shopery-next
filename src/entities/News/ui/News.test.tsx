import React from 'react';
import { render } from '@testing-library/react';
import { News } from './News';
import { TNews } from '../model';

const newsData: TNews = {
  id: '12',
  dateDay: '12',
  dateMonth: 'Jan',
  img: '/images/news.jpg',
  title: 'News Title',
  text: 'News Text',
  path: '/news/path',
};

const nextJSImageSrc = '/_next/image?url=%2Fimages%2Fnews.jpg&w=3840&q=75';

describe('News component', () => {
  it('renders correctly', () => {
    const { container } = render(<News data={newsData} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<News data={newsData} />);
    const image = getByAltText(newsData.title);

    expect(image).toHaveAttribute('src', nextJSImageSrc);
  });

  it('renders date correctly', () => {
    const { getByText } = render(<News data={newsData} />);

    expect(getByText(newsData.dateDay)).toBeInTheDocument();
    expect(getByText(newsData.dateMonth)).toBeInTheDocument();
  });

  it('renders title correctly', () => {
    const { getByText } = render(<News data={newsData} />);

    expect(getByText(newsData.title)).toBeInTheDocument();
  });

  it('renders text correctly', () => {
    const { getByText } = render(<News data={newsData} />);

    expect(getByText(newsData.text)).toBeInTheDocument();
  });

  it('renders link correctly', () => {
    const { getByText } = render(<News data={newsData} />);
    const link = getByText('Read More');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', newsData.path);
  });

  it('renders ArrowIcon correctly', () => {
    const { container } = render(<News data={newsData} />);
    const icon = container.querySelector('.newsLinkIcon');

    expect(icon).toBeInTheDocument();
  });
});
