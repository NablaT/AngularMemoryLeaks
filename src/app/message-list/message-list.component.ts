import {Component, OnDestroy, OnInit} from "@angular/core";

import {MessageService} from "../shared/services";
import {MessageModel} from "../shared/models/MessageModel";
import {Subscription} from "rxjs/Subscription";
import {MemoryLeaksActivationService} from "../shared/services/memoryleaksactivation.service";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit, OnDestroy {

  public messageList: MessageModel[];

  private subscriptions: Subscription[] = [];

  constructor(private messageService: MessageService,
              private memoryLeaksActivationService: MemoryLeaksActivationService) { }

  ngOnInit() {
    this.memoryLeaksActivationService.memoryLeaksActivated ?
      this.messageService.messageList$.subscribe((messages) => this.messageList = messages) :
      this.subscriptions.push(this.messageService.messageList$
        .subscribe((messages) => this.messageList = messages));
    this.messageService.getMessages();
  }

  ngOnDestroy() {
    if (!this.memoryLeaksActivationService.memoryLeaksActivated) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }
}
