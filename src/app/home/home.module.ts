import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MdCardModule } from "@angular/material";

import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MdCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
