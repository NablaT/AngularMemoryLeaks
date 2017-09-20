import { MessageModel } from "../models/MessageModel";

export const messageListMock: MessageModel[] = [
  {
    "id": 1,
    "content": "Hello! Welcome to the application! Today we are going to talk about memory leaks.",
    "from": "Panda coder",
    "description": "Memory leaks researcher",
    "image": "../../../assets/images/leaks.png"
  },
  {
    "id": 2,
    "content": "You can play with the memory leaks through the toggle button at the top-right of the screen. " +
    "It activates/deactivates the memory leaks",
    "from": "Panda coder",
    "description": "Memory leaks researcher"
  }
];
