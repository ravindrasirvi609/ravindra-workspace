import { createFeature } from '@ngrx/store';
import { CategoryState, categoryReducer } from '../src/category.reducer';

export const selectCategoryState = (state: CategoryState) => state;

export const selectCategories = (state: CategoryState) => state.categories;

export const selectError = (state: CategoryState) =>
  state.error;


  export const categoryFeature = createFeature({
    name: 'category',
    reducer: categoryReducer,
    
  });