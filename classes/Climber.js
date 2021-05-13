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

  addSession(location, energy, mood){
    const nextId = this.sessionList.length + 1;
    this.sessionList.push(new Session(nextId, this.id, location, energy, mood));
  }

  //properties
  get totalPoints() {
    let totalPoints = 0;
    this.sessionList.forEach((s) => totalPoints += s.score);
    return totalPoints;
  }

  get totalHeight() {
    let totalHeight = 0;
    this.sessionList.forEach((s) => totalHeight += s.totalHeight);
    return totalHeight;
  }

  get avgSessionScore() {
    return this.totalPoints / this.sessionList.length;
  }

  get maxSessionScore() {
    return this.sessionList.reduce((max, p) => (p.score > max ? p.score : max), this.sessionList[0].score)
  }

  get dashStats() {
    return ([
      {
        name: 'Boulder',
        average: 'VV',
        max: "VM"
      },
      {
        name: 'Top-Rope',
        average: '5.a',
        max: '5.m'
      },
      {
        name: 'Lead',
        average: '5.la',
        max: '5.lm'
      },
      {
        name: 'Session',
        average: this.avgSessionScore,
        max: this.maxSessionScore
      }
    ])
  }
}