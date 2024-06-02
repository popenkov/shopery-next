import { TVideo } from '@/entities/Video';

const data: TVideo = {
  background: 'video-preview.jpg',
  src: 'https://www.youtube.com/embed/2eX2TCfiFuY',
  title: 'We’re the Best Organic Farm in the World',
  subtitle: 'Video',
};

export const getVideoData = () => {
  return {
    video: data,
  };
};
