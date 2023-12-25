import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly http: HttpClient) { }

  getCategories() { // Specify the return type as Observable<any>
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
