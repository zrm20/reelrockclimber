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
    console.log(this.date.toLocaleDateString());
  }

  //properties
  get score() {
    return this.calcSessionScore();
  }

  get locationName() {
    switch(this.location){
      case 'west': return 'Climb West'
      case'east': return 'Climb East'
      case 'murfreesboro': return 'Climb Murfreesboro'
    }
  } 

  get totalRoutes() {
    return this.routeList.length;
  }

  get avgRouteScore() {
    return this.score/this.totalRoutes;
  }

  get boulderCount() {
    let boulderCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'boulder') boulderCount++});
    return boulderCount;
  }

  get topRopeCount() {
    let topRopeCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'topRope') topRopeCount++});
    return topRopeCount;
  }

  get leadCount() {
    let leadCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'lead') leadCount++});
    return leadCount;
  }

  get totalHeight() {
    let totalHeight = 0;
    this.routeList.forEach((r) =>{totalHeight += r.height});
    return totalHeight;
  }

  get avgBoulderRating() {
    let avgBoulderInde
  }
}
