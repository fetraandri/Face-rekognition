import { Http } from "./http";

export class ParticipantService extends Http {
  static async getParticipant() {
    return await Http.get(`events/participants`);
  }
  static async getParticipantHere() {
    return await Http.get(`events/participants?status=here`);
  }
  static async getParticipantExpected() {
    return await Http.get(`events/participants?status=expected`);
  }
  static async getParticipantMissing() {
    return await Http.get(`events/participants?status=missing`);
  }
  static async putParticipant() {
    return await Http.put(`events/participants`);
  }
//   static async putEventUpdate() {
//     return await Http.put(`events/{id}`);
//   }
}
