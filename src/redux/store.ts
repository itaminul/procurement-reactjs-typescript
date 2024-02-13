import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice";
import drawerReducer from './features/drawerSlice'
import breadcrumbsSlice from './features/breadcrumbsSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { vendorSetupAPI } from "./services/vendoerSetupAPI";
import { venodrCountrySetupAPI } from "./services/vendorCountrySetupAPI"
const rootReducer = combineReducers({
  auth: authReducer,
  drawer: drawerReducer,
  breadcrumbs: breadcrumbsSlice,
  [vendorSetupAPI.reducerPath]: vendorSetupAPI.reducer,
  [venodrCountrySetupAPI.reducerPath]: venodrCountrySetupAPI.reducer
});

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat([
    vendorSetupAPI.middleware,
    venodrCountrySetupAPI.middleware
  ]);

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;