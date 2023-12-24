import { createReducer, on } from '@ngrx/store';
import {
  getCategoriesSuccess,
  getCategoriesFailure,
} from './category.action'; // Import the missing 'categoryActions' from the appropriate file

// Define your state interface with its properties
export interface CategoryState {
  categories: string[];
  currentCategory: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: '',
  error: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(getCategoriesSuccess, (state, action) => {
    return { ...state, categories: [action.categories], error: '' };
  }),

  on(getCategoriesFailure, (state, action) => {
    return { ...state, categories: [], error: action.error };
  })

);
