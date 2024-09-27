import { useDispatch } from 'react-redux';

// eslint-disable-next-line
import type { AppDispatch } from '@/app/lib/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
