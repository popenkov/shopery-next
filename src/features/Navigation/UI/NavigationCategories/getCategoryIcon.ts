import icon__apple from '@public/icons/icon__apple.svg';
import icon__coffee from '@public/icons/icon__coffee.svg';
import icon__cupcake from '@public/icons/icon__cupcake.svg';
import icon__fish from '@public/icons/icon__fish.svg';
import icon__food from '@public/icons/icon__food.svg';
import icon__ice_cream from '@public/icons/icon__ice_cream.svg';
import icon__pie from '@public/icons/icon__pie.svg';
import icon__salad from '@public/icons/icon__salad.svg';

const categoryIcons = {
  icon__apple: icon__apple,
  icon__salad: icon__salad,
  icon__fish: icon__fish,
  icon__coffee: icon__coffee,
  icon__ice_cream: icon__ice_cream,
  icon__cupcake: icon__cupcake,
  icon__pie: icon__pie,
  icon__food: icon__food,
};

export const getCategoryIcon = (iconName: keyof typeof categoryIcons) => {
  return categoryIcons[iconName];
};
