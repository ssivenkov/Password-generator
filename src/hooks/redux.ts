import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppRootState } from 'redux/store';

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
