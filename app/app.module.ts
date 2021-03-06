import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';


import { AppComponent }             from './app.component';
//import { WikiSmartComponent } from './wiki-smart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    AppComponent,
    //WikiSmartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }






/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/