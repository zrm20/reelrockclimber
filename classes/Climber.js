import Session from './Session';

export default class Climber {
  constructor(id, name, picUri) {
    this.id = id;
    this.name = name;
    this.picUri= picUri;
    this.dateCreated = new Date(Date.now());
    this.sessionList = [];
    this.goalList = [];
  }

  addSession(id, location, energy, mood){
    this.sessionList.push(new Session(id, this.id, location, energy, mood));
  }
}