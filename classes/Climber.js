import Session from './Session';
import Route from './Route'

export default class Climber {
  constructor(id, name, picUri) {
    this.id = id;
    this.name = name;
    this.picUri= picUri;
    this.dateCreated = new Date(Date.now());
    this.sessionList = [];
    this.goalList = [];
  }

  //meathods
  addSession(location, energy, mood){
    const nextId = this.sessionList.length + 1;
    this.sessionList.push(new Session(nextId, this.id, location, energy, mood));
  }

  getAvgRouteIndex(type){
    let indexTotal = 0;
    let totalRoutes = 0;

    this.climberRouteList.forEach((r) => 
    {
      if(r.type === type && r.isSent){
        indexTotal += r.ratingIndex;
        totalRoutes++;
      }
    })
    return indexTotal / totalRoutes;
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

  get climberRouteList() {
    let totalRoutes = [];

    this.sessionList.forEach((s) =>{
      totalRoutes.concat([1,1]);
    })
    
    return totalRoutes;
  }

  get avgSessionScore() {
    return this.totalPoints / this.sessionList.length;
  }

  get maxSessionScore() {
    return this.sessionList.reduce((max, p) => (p.score > max ? p.score : max), this.sessionList[0].score)
  }
  
  get avgBoulderRating(){
    return this.getAvgRouteIndex('boulder');
  }

  get avgTopRopeRating(){
    return this.getAvgRouteIndex('topRope');
  }

  get avgLeadRating(){
    return this.getAvgRouteIndex('lead');
  }

  get dashStats() {
    return ([
      {
        name: 'Boulder',
        average: this.avgBoulderRating,
        max: "VM"
      },
      {
        name: 'Top-Rope',
        average: this.avgTopRopeRating,
        max: '5.m'
      },
      {
        name: 'Lead',
        average: this.avgLeadRating,
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