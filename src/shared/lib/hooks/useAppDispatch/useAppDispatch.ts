import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/app/lib/store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
