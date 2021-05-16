import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientSelected(newIngred:Ingredient){
    this.ingredients.push(newIngred)
  }
  clearIngeadient(){
    this.ingredients = []
    console.log(this.ingredients)
  }
  deleteIngredient(pos:number){
    this.ingredients.splice(pos,1)
  }
}
