import { Login } from './model/login.model';
import { createAction, props } from '@ngrx/store';
import * as ActionTypes from './actions-types';

export const login = createAction(
  ActionTypes.LOGIN,
  props<{ user: Login }>()
);
