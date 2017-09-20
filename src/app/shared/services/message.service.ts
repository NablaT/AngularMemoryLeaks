import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { MessageModel } from "../models/MessageModel";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { messageListMock } from "../mocks/message-list.mock";

@Injectable()
export class MessageService {
  public messageList$: BehaviorSubject<MessageModel[]>;

  constructor() {
    this.messageList$ = new BehaviorSubject([]);
  }

  public getMessages() {
    this.messageList$.next(messageListMock);
  }
}
