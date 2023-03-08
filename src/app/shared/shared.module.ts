import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {ErrorPageComponent} from "./components/error-page/error-page.component";



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
