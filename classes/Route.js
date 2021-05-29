export default class Route {

  //todo add index properties so higher classes can calc avg and max ratings

  //score values
  static boulderValues = {
    v0: {index: 1, rating: 'V0', score: 2},
    v1: {index: 2, rating: 'V1', score: 10},
    v2: {index: 3, rating: 'V2', score: 20},
    v3: {index: 4, rating: 'V3', score: 30},
    v4: {index: 5, rating: 'V4', score: 40},
    v5: {index: 6, rating: 'V5', score: 50},
    v6: {index: 7, rating: 'V6', score: 60},
    v7: {index: 8, rating: 'V7', score: 70},
    v8: {index: 9, rating: 'V8', score: 80},
    v9: {index: 10, rating: 'V9', score: 90},
    v10: {index: 11, rating: 'V10', score: 100}
  }
  
  static wallValues = {
    '5.4': {index: 1, rating: '5.4', topRopeScore: 1, leadScore: 10},
    '5.5': {index: 2, rating: '5.5', topRopeScore: 2, leadScore: 15},
    '5.6': {index: 3, rating: '5.6', topRopeScore: 3, leadScore: 20},
    '5.7': {index: 4, rating: '5.7', topRopeScore: 5, leadScore: 25},
    '5.8': {index: 5, rating: '5.8', topRopeScore: 10, leadScore: 30},
    '5.9': {index: 6, rating: '5.9', topRopeScore: 20, leadScore: 45},
    '5.10-': {index: 7, rating: '5.10-', topRopeScore: 30, leadScore: 60},
    '5.10': {index: 8, rating: '5.10', topRopeScore: 40, leadScore: 75},
    '5.10+': {index: 9, rating: '5.10-', topRopeScore: 50, leadScore: 90},
    '5.11-': {index: 10, rating: '5.11-', topRopeScore: 60, leadScore: 105},
    '5.11': {index: 11, rating: '5.11', topRopeScore: 70, leadScore: 120},
    '5.11+': {index: 12, rating: '5.11+', topRopeScore: 80, leadScore: 135},
    '5.12-': {index: 13, rating: '5.12-', topRopeScore: 90, leadScore: 150},
    '5.12': {index: 14, rating: '5.12', topRopeScore: 100, leadScore: 165},
    '5.12+': {index: 15, rating: '5.12+', topRopeScore: 110, leadScore: 180},
    '5.13': {index: 16, rating: '5.13', topRopeScore: 120, leadScore: 200}
  }

  constructor(id, sessionId, type, rating, attempts, isSent = true, height = null){
    this.id = id;
    this.sessionId = sessionId;
    this.type = type;
    this.rating = rating;
    this.isSent = isSent;
    this.attempts = attempts;
    this.height = this.type === 'boulder' ? null : height;
  }


//meathods
  calcScore() {
    let sentMultiplier = this.isSent ? 1 : .5;
    let attemptMultiplier = this.attempts <= 10 ? ((11 - this.attempts) / 10) : 0;

    switch(this.type){
      case 'boulder': {
        return Route.boulderValues[this.rating].score * sentMultiplier * attemptMultiplier;
      }
      case 'topRope': {
        return Route.wallValues[this.rating].topRopeScore * sentMultiplier * attemptMultiplier;
      }
      case 'lead': {
        return Route.wallValues[this.rating].leadScore * sentMultiplier * attemptMultiplier;
      }
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
        return Route.boulderValues[this.rating].rating
      }
      case 'topRope': {
        return Route.wallValues[this.rating].rating
      }
      case 'lead': {
        return Route.wallValues[this.rating].rating
      }
    }
  }

  get ratingIndex() {
    if(this.type === 'boulder'){
      return Route.boulderValues[this.rating].index
    }
    else{
      return Route.wallValues[this.rating].index
    }
  }
}
