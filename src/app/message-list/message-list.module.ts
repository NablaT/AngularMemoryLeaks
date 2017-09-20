import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MdCardModule, MdButtonModule } from "@angular/material";

import { MessageListComponent } from "./message-list.component";
import { MessageService } from "../shared/services/message.service";
import {MemoryLeaksActivationService} from "../shared/services/memoryleaksactivation.service";
import {MessageComponent} from "./message/message.component";

@NgModule({
  declarations: [
    MessageListComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  exports: [MessageListComponent],
  providers: [MessageService, MemoryLeaksActivationService]
})
export class MessageListModule { }
