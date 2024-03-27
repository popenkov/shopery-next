import icon__facebook from '@public/icons/icon__facebook.svg';
import icon__instagram from '@public/icons/icon__instagram.svg';
import icon__pinterest from '@public/icons/icon__pinterest.svg';
import icon__twitter from '@public/icons/icon__twitter.svg';

const icons = {
  icon__facebook: icon__facebook,
  icon__twitter: icon__twitter,
  icon__pinterest: icon__pinterest,
  icon__instagram: icon__instagram,
};

export const getSocialIcon = (iconName: keyof typeof icons) => {
  return icons[iconName];
};
