export default class Route {

  constructor(id, sessionId, type, rating, attempts, isSent = true, height = null){
    this.id = id;
    this.sessionId = sessionId;
    this.type = type;
    this.rating = rating;
    this.isSent = isSent;
    this.attempts = attempts;
    this.height = this.type === 'boulder' ? null : height;
  }

//score values
  boulderValues = {
    v0: {rating: 'V0', score: 2},
    v1: {rating: 'V1', score: 10},
    v2: {rating: 'V2', score: 20},
    v3: {rating: 'V3', score: 30},
    v4: {rating: 'V4', score: 40},
    v5: {rating: 'V5', score: 50},
    v6: {rating: 'V6', score: 60},
    v7: {rating: 'V7', score: 70},
    v8: {rating: 'V8', score: 80},
    v9: {rating: 'V9', score: 90},
    v10: {rating: 'V10', score: 100}
  }

  wallValues = {
    '5.4': {rating: '5.4', topRopeScore: 1, leadScore: 10},
    '5.5': {rating: '5.5', topRopeScore: 2, leadScore: 15},
    '5.6': {rating: '5.6', topRopeScore: 3, leadScore: 20},
    '5.7': {rating: '5.7', topRopeScore: 5, leadScore: 25},
    '5.8': {rating: '5.8', topRopeScore: 10, leadScore: 30},
    '5.9': {rating: '5.9', topRopeScore: 20, leadScore: 45},
    '5.10-': {rating: '5.10-', topRopeScore: 30, leadScore: 60},
    '5.10': {rating: '5.10', topRopeScore: 40, leadScore: 75},
    '5.10+': {rating: '5.10-', topRopeScore: 50, leadScore: 90},
    '5.11-': {rating: '5.11-', topRopeScore: 60, leadScore: 105},
    '5.11': {rating: '5.11', topRopeScore: 70, leadScore: 120},
    '5.11+': {rating: '5.11+', topRopeScore: 80, leadScore: 135},
    '5.12-': {rating: '5.12-', topRopeScore: 90, leadScore: 150},
    '5.12': {rating: '5.12', topRopeScore: 100, leadScore: 165},
    '5.12+': {rating: '5.12+', topRopeScore: 110, leadScore: 180},
    '5.13': {rating: '5.13', topRopeScore: 120, leadScore: 200}
  }

//meathods
  calcScore() {
    let sentMultiplier = this.isSent ? 1 : .5;
    let attemptMultiplier = this.attempts <= 10 ? ((11 - this.attempts) / 10) : 0;

    switch(this.type){
      case 'boulder': {
        return this.boulderValues[this.rating].score * sentMultiplier * attemptMultiplier;
      }
      case 'topRope': {
        return this.wallValues[this.rating].topRopeScore * sentMultiplier * attemptMultiplier;
      }
      case 'lead': {
        return this.wallValues[this.rating].leadScore * sentMultiplier * attemptMultiplier;
      }
    }
  }
  

  printRoute() {
    console.log('---------');
    console.log(`Route: ${this.id}`)
    console.log(`Type: ${this.type}`);
    console.log(`Rating: ${this.rating}`)
    console.log(`Attempts: ${this.attempts}`)
    console.log(this.isSent ? 'Sent!' : 'Did not top')
    console.log(`Score: ${this.score}`)
    if(this.isFlashed){
      console.log('Flashed It!')
    }
  }

//properties
  get isFlashed() {
    return (this.isSent && this.attempts === 1) ? true : false;
  }

  get score() {
    return this.calcScore();
  }

  get typeName() {
    switch(this.type){
      case 'boulder': return 'Boulder';
      case 'topRope': return 'Top Rope';
      case 'lead': return 'Lead';
    }
  }

  get ratingName() {
    switch(this.type){
      case 'boulder': {
        return this.boulderValues[this.rating].rating
      }
      case 'topRope': {
        return this.wallValues[this.rating].rating
      }
      case 'lead': {
        return this.wallValues[this.rating].rating
      }
    }
  }
}


//testing
// let myBoulderRoute = new Route(1, 1, 'boulder', 'v3', 2, true);

// let myTopRopeRoute = new Route(2, 1, 'topRope', '5.10-', 1, true);


// let myLeadRoute = new Route(3, 1, 'lead', '5.9', 3, false);


// myBoulderRoute.printRoute();
// myTopRopeRoute.printRoute();
// myLeadRoute.printRoute();
