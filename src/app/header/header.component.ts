import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import {  HttpResponse } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
      constructor( private dataStorageService:DataStorageService) {
  }

  onAddData(){
    this.dataStorageService.addRecipes().
    subscribe((httpresponse:HttpResponse<Recipe[]>) =>{
      console.log(httpresponse)}
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes()
  }
}
