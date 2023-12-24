import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state.model';
import { CategoryState } from '../models/category-state.model';

export const selectCategory = (state: AppState) => state.category;

export const getCategory = createSelector(
    selectCategory,
    (categoryState: CategoryState) => categoryState.category
);
