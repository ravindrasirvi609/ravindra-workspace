import { Injectable } from '@angular/core';
import { CategoryService } from './lib/category.service';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { categoryActions, getCategoriesSuccess } from './category.action';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly categoryService: CategoryService,
    private actions$: Actions
  ) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoryActions),
      exhaustMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => getCategoriesSuccess(categories[0])), // Fix: Pass the first category as a single string
          catchError(() => EMPTY)
        )
      )
    );
  });
}
