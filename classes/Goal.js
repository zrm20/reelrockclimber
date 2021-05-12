export default class Goal {
  
  constructor(id, name, length, climberId){
    this.id = id;
    this.name = name;
    this.startDate = new Date(Date.now());
    this.endDate = this.startDate + length;
    this.climberId = climberId;
    this.isComplete = false;
  }
}