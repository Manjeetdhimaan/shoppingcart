import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { AppRecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoute: Routes = [
    {path: '' , redirectTo: 'recipe' , pathMatch:'full'},
    {path: 'recipe' , component: RecipesComponent , children:[
        {path:'', component: AppRecipeStartComponent},
        {path: 'new' , component: RecipeEditComponent},
        {path:':id' , component: RecipeDetailComponent},
        {path: ':id/edit' , component: RecipeEditComponent}
    ]},
    {path: 'shopping-list' , component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}