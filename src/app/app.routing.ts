import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MessageListComponent } from "./message-list/message-list.component";

export const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "message-list", component: MessageListComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
