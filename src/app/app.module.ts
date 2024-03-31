import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//components
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { CameraAccessComponent } from './components/camera-access/camera-access.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

//services
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';



@NgModule({
  declarations: [AppComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    IngredientListComponent,
    CameraAccessComponent],
  imports: [BrowserModule, FormsModule , IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera, RecipeService,
    IngredientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
