import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Video } from './Video';

describe('Video component', () => {
  const data = {
    src: 'https://example.com/video.mp4',
    background: 'image.jpg',
    title: 'Video title',
    subtitle: 'Video subtitle',
  };

  it('renders video preview with overlay', () => {
    const { getByText } = render(<Video data={data} hasOverlay={true} />);
    expect(getByText(data.title)).toBeInTheDocument();
    expect(getByText(data.subtitle)).toBeInTheDocument();
  });

  it('renders video preview without overlay', () => {
    const { getByText } = render(<Video data={data} hasOverlay={false} />);
    expect(getByText(data.title)).toBeInTheDocument();
    expect(getByText(data.subtitle)).toBeInTheDocument();
  });

  it('plays video when play button is clicked', async () => {
    const { getByText, getByRole, container } = render(<Video data={data} />);
    const playButton = getByRole('button');
    const title = getByText(data.title);

    fireEvent.click(playButton);

    await waitFor(() => {
      const iframe = container.querySelector('.videoFrame') as DetailedHTMLProps<
        HTMLAttributes<HTMLIFrameElement>,
        HTMLIFrameElement
      >;

      expect(title).not.toBeInTheDocument();
      expect(iframe).toBeInTheDocument();
    });
  });

  it('renders iframe with correct src', async () => {
    const { getByRole, container } = render(<Video data={data} />);
    const playButton = getByRole('button');
    fireEvent.click(playButton);
    await waitFor(() => {
      const iframe = container.querySelector('.videoFrame') as DetailedHTMLProps<
        HTMLAttributes<HTMLIFrameElement>,
        HTMLIFrameElement
      >;
      expect(iframe?.src).toBe(`${data.src}?autoplay=1&mute=1`);
    });
  });
});
