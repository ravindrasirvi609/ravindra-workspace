import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService } from '@ravindra-workspace/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

//import { CategoryService } from '';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, CommonModule],
  selector: 'ravindra-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ravindra-workspace';
  categories = this.store.select((state: any) => state.categories);

  constructor(
    private readonly categoryService: CategoryService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      console.log('AppComponent ngOnInit data', data);
    });
  }
}
