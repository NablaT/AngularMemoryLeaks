import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MdTabsModule, MdToolbarModule, MdSlideToggleModule} from "@angular/material";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HomeModule} from "./home/home.module";
import {MessageListModule} from "./message-list/message-list.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MemoryLeaksActivationService} from "./shared/services/memoryleaksactivation.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdToolbarModule,
    routing,
    HomeModule,
    MessageListModule,
    MdSlideToggleModule,
    FormsModule
  ],
  providers: [MemoryLeaksActivationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
