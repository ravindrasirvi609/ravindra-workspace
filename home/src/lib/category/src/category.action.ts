import { createAction } from '@ngrx/store';

// Define your action types
export const categoryActions = createAction('[Category] Get Categories');
export const getCategoriesSuccess = createAction(
  '[Category] Get Categories Success',
  (categories: string) => ({ categories })
);
export const getCategoriesFailure = createAction(
  '[Category] Get Categories Failure',
  (error: string) => ({ error })
);

// Define your action creators
// let arrayName = ['ravindra', 'kumar', 'singh'];

// arrayName.push('singh');    // ['ravindra', 'kumar', 'singh', 'singh']

// arrayName = [...arrayName, 'singh'];    // ['ravindra', 'kumar', 'singh', 'singh']
