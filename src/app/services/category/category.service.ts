import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private myClient: HttpClient) { }
  private categoryURL = "https://abilitysystem.azurewebsites.net/api/Category";
  private categoryWithProductsURL = "https://abilitysystem.azurewebsites.net/api/Category/products";

  getAllCategories() {
    return this.myClient.get(this.categoryURL);
  }
  getCategoryWithProducts(id:any) {
    return this.myClient.get(`${this.categoryWithProductsURL}/${id}`);
  }

}
