import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  // number=[1,2,3,4,5]
  oddNumber=[1,3,5,7]
  evenNumber=[2,4,6]
  odd=false;
  value=100;
 

 loadedFeature:string = 'Recipes' 

   onNavigate(features:string){
  this.loadedFeature = features;
  }
}