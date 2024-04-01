import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { IngredientListComponent } from '../components/ingredient-list/ingredient-list.component';
import { RecipeListComponent } from '../components/recipe-list/recipe-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    IngredientListComponent, 
    RecipeListComponent
  ]
})
export class HomePageModule {}
