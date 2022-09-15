import { Http } from "./http";

export class EventService extends Http {
  static async getEvent() {
    return await Http.get(`events`);
  }
  static async putEvent() {
    return await Http.put(`events`);
  }
  // static async postEvent() {
  //   return await Http.post(`events`);
  // }
}
