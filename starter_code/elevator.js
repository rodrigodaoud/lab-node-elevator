class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    const startElevator = setInterval(function(){
      update();
    }, 1000);
   }
  stop() {
    clearInterval(startElevator);
   }
  update() {
    log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() { 
    console.log("Direction: " + "|" + "Floor: " + this.floor);
  }
}

module.exports = Elevator;
