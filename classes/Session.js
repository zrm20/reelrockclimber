import Route from './Route';

export default class Session {
  constructor(id, climberId, location, energy, mood, goal){
    this.id = id;
    this.climberID = climberId;
    this.location = location;
    this.energy = (energy > 0 && energy <= 10) ? energy : null;
    this.mood = (mood >= -5 && mood <= 5) ? mood : null;
    this.routeList = [];
    this.date = new Date(Date.now());
  }

  addRoute(type, rating, attempts, isSent, height) {
    const nextRouteID = this.routeList.length + 1;
    this.routeList.push(new Route(nextRouteID, this.id, type, rating, attempts, isSent, height));
  }

  //meathods
  calcSessionScore(){
    let total = 0;
    for (let i=0; i < this.routeList.length; i++){
      total += this.routeList[i].score;
    }
    return total;
  }

  printSession() {
    console.log(`Climbing Session ${this.id}`);
    console.log(this.date.getDate());
  }

  //properties
  get score() {
    return this.calcSessionScore();
  }

  //todo boulderCount, topRopeCount, leadCount
}
