import { useSelector } from 'react-redux';
import { /*TypedUseSelectorHook,*/ useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '~/store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = useSelector.withTypes<RootState>();
