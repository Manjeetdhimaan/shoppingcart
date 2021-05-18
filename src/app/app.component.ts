import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
//   // number=[1,2,3,4,5]
//   oddNumber=[1,3,5,7]
//   evenNumber=[2,4,6]
//   odd=false;
//   value=100;
loadedFeature:string = 'Recipes' 

 
onNavigate(features:string){
  this.loadedFeature = features;
  }
}
  // export class AppComponent{

   
  //   account=[
  //      {
  //        name:"Master Account",
  //     status:"active"
  //   },
  //     {
  //       name:"Test Account",
  //       status:"inActive"
  //     },
  //     {
  //       name:"Hidden Account",
  //       status:"unknown"
  //     }
  //   ]
  //   onAddedAccount(newStatus:{ name:string;status:string}){
  //     this.account.push(newStatus);

  //   }
  //   onStatusChange( newInfo:{ id:number;newStatus:string}){
  //    this.account[newInfo.id].status=newInfo.newStatus;
  //   }
  // }
  