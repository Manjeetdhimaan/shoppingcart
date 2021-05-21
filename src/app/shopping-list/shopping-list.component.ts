import { Component, OnInit, ElementRef } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getList()
  }
  onIngredientSelected(newIngred: Ingredient) {
    this.ingredients.push(newIngred)
  }
  clearIngeadient() {
    this.ingredients = []
    console.log(this.ingredients)
  }
  deleteIngredient(pos: number) {
    this.ingredients.splice(pos, 1)
  }
}
