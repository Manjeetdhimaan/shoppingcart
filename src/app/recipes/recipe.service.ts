import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 
    'This is simply a test',
     'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg')
  ];
 
  getRecipe(){
    return this.recipes.slice();
  }

constructor(){ 
}
}