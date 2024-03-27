import { HeaderCategory } from '@/entities/NavigationCategory';

import { NavigationLink } from './navigation-link.interface';

export type NavigationType = {
  categories: HeaderCategory[];
  navigation: NavigationLink[];
};
