import { type THeaderCategory } from 'entities/NavigationCategory';
import { TLink } from 'shared/model/navigation-link.types';

export type TNavigation = {
  categories: THeaderCategory[];
  navigation: TLink[];
};
