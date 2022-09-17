import { Http } from "./http";

export class PlaceService extends Http {
  static async getPlace() {
    return await Http.get(`places`);
  }
  static async putPlace() {
    return await Http.put(`places`);
  }
}
