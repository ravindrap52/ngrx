import { Login } from './../model/login.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import * as LoginActions from '../login.actions';
export interface LoginState {
  user: Login;
}

export const initialLoginState: LoginState = {
  user: undefined,
};

export const loginRedcer = createReducer(
  initialLoginState,
  on(LoginActions.login, (state, action) => {
    return {
      user: action.user
    };
  })
);
