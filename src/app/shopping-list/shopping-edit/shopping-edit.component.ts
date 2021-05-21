import { Component, OnInit, ViewChild, ElementRef, Output ,EventEmitter} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
 
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') inputData:ElementRef;
@ViewChild('amountInput') inputAmnt:ElementRef;
@Output() ingredientEmiited = new EventEmitter<Ingredient>();
@Output() ingredientClearEmitted = new EventEmitter<void>();
  constructor() { console.log('constructor called') }

  ngOnInit() {
 console.log('ngOnIt called')
    }
    addIngredient(){
    const name = this.inputData.nativeElement.value;
    const amount = this.inputAmnt.nativeElement.value
    const newIngredient = new Ingredient(name,amount);
    this.ingredientEmiited.emit(newIngredient);
    // const log1 = new LoggerService()
  }
  clearIngredient(){
    this.ingredientClearEmitted.emit();
  }
}
