import { TwitterIcon, PinterestIcon, InstagramIcon, FacebookIcon } from '@/shared/ui/icons';

const icons = {
  FacebookIcon: FacebookIcon,
  TwitterIcon: TwitterIcon,
  PinterestIcon: PinterestIcon,
  InstagramIcon: InstagramIcon,
};

export const getSocialIcon = (iconName: keyof typeof icons) => {
  return icons[iconName];
};
