import icon__delivery_truck from '@public/icons/icon__delivery_truck.svg';
import icon__headphones from '@public/icons/icon__headphones.svg';
import icon__package from '@public/icons/icon__package.svg';
import icon__shopping_bag from '@public/icons/icon__shopping_bag.svg';

// todo  переименовать левую часть
const advantageIcons = {
    icon__delivery_truck: icon__delivery_truck,
    icon__headphones: icon__headphones,
    icon__shopping_bag: icon__shopping_bag,
    icon__package: icon__package,
};

export const getAdvantageIcon = (iconName: keyof typeof advantageIcons) => {
    return advantageIcons[iconName];
};
