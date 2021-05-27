import { Injectable } from "@angular/core";
import { HttpClient ,HttpResponse } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx'

@Injectable()
export class DataStorageService{
    constructor(private http:HttpClient , private recipeService:RecipeService){
}
addRecipes(){
   return this.http.put('https://ng-recipe-book-ba334-default-rtdb.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
}

getRecipes(){
    this.http.get('https://ng-recipe-book-ba334-default-rtdb.firebaseio.com/recipes.json')
    .map(
        (response:HttpResponse<Recipe[]>)=>
        {
            const recipes:any = response
           for(let recipe of recipes){
               if(!recipe['ingredients']){
                   recipe['ingredients']=[]
               }
           }
           return recipes;
        }
    )
    .subscribe(
        (recipe:Recipe[])=>{
            this.recipeService.getData(recipe);
        }
    );
}
}