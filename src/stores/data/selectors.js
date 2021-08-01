import { createSelector } from 'reselect';

const selectData = state => state.data;

export const selectTest = createSelector(selectData, substate => substate.test);
