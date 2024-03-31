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


@NgModule({
  declarations: [AppComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    CameraAccessComponent],
  imports: [BrowserModule, FormsModule , IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
