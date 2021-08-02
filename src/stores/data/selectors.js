import { createSelector } from 'reselect';

const selectData = state => state.data;

export const selectTest = createSelector(selectData, substate => substate.test);

export const selectUser = createSelector(selectData, substate => substate.user);

export const selectUserSignInError = createSelector(
  selectData,
  substate => substate.userSignInError,
);
