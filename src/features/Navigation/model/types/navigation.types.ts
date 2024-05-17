import { HeaderCategory } from 'entities/NavigationCategory';
import { TLink } from 'shared/model/navigation-link.types';

export type TNavigation = {
  categories: HeaderCategory[];
  navigation: TLink[];
};
