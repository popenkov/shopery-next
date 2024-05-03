import icon__price_tag from '@public/icons/icon__price_tag.svg';
import icon__leaf from '@public/icons/icon__leaf.svg';

const icons = {
    icon__price_tag: icon__price_tag,
    icon__leaf: icon__leaf,
};

export const getVideoAdIcon = (iconName: keyof typeof icons) => {
    return icons[iconName];
};
