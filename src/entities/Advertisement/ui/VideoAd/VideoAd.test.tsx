import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { VideoAd } from './VideoAd';
import * as methods from '../../lib/getVideoAdIcon';
import { TAdvertisement } from '../../model';

const adData: TAdvertisement[] = [
  {
    icon: 'PriceTagIcon',
    title: 'Title 1',
    text: 'Text 1',
  },
  {
    icon: 'LeafIcon',
    title: 'Title 2',
    text: 'Text 2',
  },
];

const video = <div>Video content</div>;

describe('VideoAd component', () => {
  it('renders correctly', () => {
    const { container } = render(<VideoAd adData={adData} video={video} />);
    expect(container).toMatchSnapshot();
  });

  it('renders video content', () => {
    const { getByText } = render(<VideoAd adData={adData} video={video} />);
    expect(getByText('Video content')).toBeInTheDocument();
  });

  it('renders ad advantages', () => {
    const { getAllByTestId } = render(<VideoAd adData={adData} video={video} />);
    const advantages = getAllByTestId('advantage');
    expect(advantages).toHaveLength(2);
  });

  it('renders ad advantage icons', () => {
    const { container } = render(<VideoAd adData={adData} video={video} />);
    const icons = container.querySelectorAll('svg');
    expect(icons).toHaveLength(2);
  });

  it('renders ad advantage titles and subtitles', () => {
    const { getAllByText } = render(<VideoAd adData={adData} video={video} />);
    const titles = getAllByText(/Title [1-2]/);
    const subtitles = getAllByText(/Text [1-2]/);
    expect(titles).toHaveLength(2);
    expect(subtitles).toHaveLength(2);
  });

  it('calls getVideoAdIcon with correct icon', () => {
    const getVideoAdIconSpy = jest.spyOn(methods, 'getVideoAdIcon');
    render(<VideoAd adData={adData} video={video} />);
    expect(getVideoAdIconSpy).toHaveBeenCalledTimes(2);
    expect(getVideoAdIconSpy).toHaveBeenCalledWith('PriceTagIcon');
    expect(getVideoAdIconSpy).toHaveBeenCalledWith('LeafIcon');
  });
});
