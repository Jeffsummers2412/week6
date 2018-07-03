import { Component } from '@angular/core';
import { ShoppinglistPage } from '../shoppinglist/shoppinglist'
import { RecipesPage } from '../recipes/recipes';

@Component({
    selector: "page-tabs",
    template: `
    <ion-tabs> 
        <ion-tab [root]="shoppingListPage" tabTitle="Shopping List"></ion-tab>
        <ion-tab [root]="recipesPage" tabTitle="Recipes"></ion-tab>
    </ion-tabs>
    `
})

export class TabsPage{
    shoppingListPage = ShoppinglistPage;
    recipesPage = RecipesPage;
}