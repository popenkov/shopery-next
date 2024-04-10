import { HeaderCategory } from '@/entities/NavigationCategory';

import { NavigationLink } from './navigation-link.interface';

export type TNavigation = {
    categories: HeaderCategory[];
    navigation: NavigationLink[];
};
