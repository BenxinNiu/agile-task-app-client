import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BennergyNavigationBarComponent } from './component/bennergy-navigation-bar/bennergy-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BennergyNavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
