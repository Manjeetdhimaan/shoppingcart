import { Component, OnInit, ViewChild, ElementRef, Output ,EventEmitter} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { LoggerService } from '../../logger.service'

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
  constructor(private loggerService:LoggerService) { }

  ngOnInit() {

    }
    addIngredient(){
    const name = this.inputData.nativeElement.value;
    const amount = this.inputAmnt.nativeElement.value
    const newIngredient = new Ingredient(name,amount);
    this.ingredientEmiited.emit(newIngredient);
    // const log1 = new LoggerService()
    this.loggerService.logToConsole(this.inputData.nativeElement.value)
  }
  clearIngredient(){
    this.ingredientClearEmitted.emit();
  }
}
