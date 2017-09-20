/**
 * Class which represents an Message object
 */
export class MessageModel {

  constructor(public id?: number,
              public content?: string,
              public from?: string,
              public description?: string,
              public image?: string) {}
}
