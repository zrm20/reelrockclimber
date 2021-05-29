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

  //average index for a given type averaging calculations
  getAvgIndex(type) {
    let indexTotal = 0;
    let totalRoutes = 0;

    this.routeList.forEach((r) => 
    {
      if(r.type === type && r.isSent){
        indexTotal += r.ratingIndex;
        totalRoutes++;
      }
    })
    return indexTotal / totalRoutes;
  }

  //highest rating index based on type
  getMaxIndex(type) {
    let max = 0;
    this.routeList.forEach((r) => {
      if(r.type === type && r.isSent){
        if(r.ratingIndex > max){
          max = r.ratingIndex;
        }
      }
    })
    return max;
  }

  //*******properties******

  //session score
  get score() {
    return this.calcSessionScore();
  }

  //official location name
  get locationName() {
    switch(this.location){
      case 'west': return 'Climb West'
      case'east': return 'Climb East'
      case 'murfreesboro': return 'Climb Murfreesboro'
    }
  } 

  //total number of routes in routeList
  get totalRoutes() {
    return this.routeList.length;
  }

  //average score per route in route list
  get avgRouteScore() {
    return this.score/this.totalRoutes;
  }

  //total number of boulder routes in routeList
  get boulderCount() {
    let boulderCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'boulder') boulderCount++});
    return boulderCount;
  }

  //total number of top rope routes in routeList
  get topRopeCount() {
    let topRopeCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'topRope') topRopeCount++});
    return topRopeCount;
  }

  //total number of lead routes in routeList
  get leadCount() {
    let leadCount = 0;
    this.routeList.forEach((r) =>{if(r.type === 'lead') leadCount++});
    return leadCount;
  }

  //total height climbed in session
  get totalHeight() {
    let totalHeight = 0;
    this.routeList.forEach((r) =>{totalHeight += r.height});
    return totalHeight;
  }

  get avgBoulderIndex(){
    return this.getAvgIndex('boulder');
  }

  get maxBoulderIndex(){
    return this.getMaxIndex('boulder')
  }

  get avgTopRopeIndex() {
    return this.getAvgIndex('topRope');
  }
  
  get maxTopeRopeIndex() {
    return this.getMaxIndex('topRope');
  }

  get avgLeadIndex(){
    return this.getAvgIndex('lead');
  }

  get maxLeadIndex(){
    return this.getMaxIndex('lead');
  }
}
