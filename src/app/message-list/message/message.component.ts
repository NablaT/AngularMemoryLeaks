import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../shared/models/MessageModel";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;

  constructor() { }

  ngOnInit() {
  }

}
