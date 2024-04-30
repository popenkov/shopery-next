import { HeaderCategory } from '@/entities/NavigationCategory';

import { NavigationLink } from './navigation-link.types';

export type TNavigation = {
    categories: HeaderCategory[];
    navigation: NavigationLink[];
};
