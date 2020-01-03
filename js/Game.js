var OregonH = OregonH || {};

//constants
OregonH.WEIGHT_PER_OX = 20;
OregonH.WEIGHT_PER_PERSON = 2;
OregonH.FOOD_WEIGHT = 0.6;
OregonH.FIREPOWER_WEIGHT = 5;
OregonH.GAME_SPEED = 1100;
OregonH.DAY_PER_STEP = 3;
OregonH.FOOD_PER_PERSON = 0.05;
OregonH.FULL_SPEED = 0.2;
OregonH.SLOW_SPEED = 0.0001;
OregonH.FINAL_DISTANCE = 284;
OregonH.EVENT_PROBABILITY = 0.45; // change this later to fit your number of events
OregonH.ENEMY_FIREPOWER_AVG = 5;
OregonH.ENEMY_GOLD_AVG = 50;

OregonH.Game = {};

//initiate the game
OregonH.Game.init = function(){

  //reference ui
  this.ui = OregonH.UI;

  //reference event manager
  this.eventManager = OregonH.Event;

  //setup caravan
  this.caravan = OregonH.Caravan;
  this.caravan.init({
    day: 0,
    distance: 193,
    crew: 20,
    food: 100,
    oxen: 4,
    money: 500,
    firepower: 5
  });

  //pass references
  this.caravan.ui = this.ui;
  this.caravan.eventManager = this.eventManager;

  this.ui.game = this;
  this.ui.caravan = this.caravan;
  this.ui.eventManager = this.eventManager;

  this.eventManager.game = this;
  this.eventManager.caravan = this.caravan;
  this.eventManager.ui = this.ui;

  //begin adventure!
  this.startJourney();
};

//start the journey and time starts running
OregonH.Game.startJourney = function() {
  this.gameActive = true;
  this.previousTime = null;
  this.step();
};

//game loop
OregonH.Game.step = function(timestamp) {

  //starting, setup the previous time for the first time
  if(!this.previousTime){
    this.previousTime = timestamp;
    this.updateGame();
  }

  //time difference
  var progress = timestamp - this.previousTime;

  //game update
  if(progress >= OregonH.GAME_SPEED) {
    this.previousTime = timestamp;
    if(this.caravan.distance>194){
      OregonH.FULL_SPEED = 1;
      OregonH.SLOW_SPEED = 0.5;
      OregonH.EVENT_PROBABILITY = 0.15;
      OregonH.GAME_SPEED = 750;

    }
    this.updateGame();
  }

  //we use "bind" so that we can refer to the context "this" inside of the step method
  if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
};

//update game stats
OregonH.Game.updateGame = function() {
  //day update
  this.caravan.day += OregonH.DAY_PER_STEP;

  //food consumption
  this.caravan.consumeFood();

  if(this.caravan.food === 0) {
    this.ui.notify('Your caravan starved to death\n\n\n\n\n\n\n\n\n\n\n\n', 'negative');
    this.gameActive = false;
    return;
  }

  //update weight
  this.caravan.updateWeight();

  //update progress
  this.caravan.updateDistance();

  //show stats
  this.ui.refreshStats();

  //check if everyone died
  if(this.caravan.crew <= 0) {
    this.caravan.crew = 0;
    this.ui.notify('Everyone died\n\n\n\n\n\n\n\n\n\n\n\n', 'negative');
    this.gameActive = false;
    return;
  }

  //check win game
  if(this.caravan.distance >= OregonH.FINAL_DISTANCE) {
    this.ui.notify('You have reached the reign of Diocletian. Impressive. Somehow, you survived almost a hundered years of strife and instability.\n\n The empire has finally stabilized, but at great cost. The treasuries are depleted, the trade network has broken down, and it is clear that the Pax Romana will never return. Although the empire is safe for now, the western portion will ultimately crumble, this time for good, in 200 years.\n\n|RESPICE|ADSPICE|PROSPICE|\n\n\n\n\n\n\n\n', 'positive');
    this.gameActive = false;
    return;
  }

  //random events
  if(this.caravan.distance<194 && eventIndex<2){
    this.eventManager.generateEvent();
  }
  else if(Math.floor(this.caravan.distance)==235){
    this.eventManager.generateEvent();
  }
  else if(Math.floor(this.caravan.distance)==249){
    this.eventManager.generateEvent();
  }
  else if(Math.floor(this.caravan.distance)==260){
    this.eventManager.generateEvent();
  }
  else if(Math.floor(this.caravan.distance)==284){
    this.eventManager.generateEvent();
  }
  else if(Math.floor(this.caravan.distance)==200){
    this.eventManager.generateEvent();
  }
  else if(Math.random() <= OregonH.EVENT_PROBABILITY) {
    this.eventManager.generateEvent();
  }
};

//pause the journey
OregonH.Game.pauseJourney = function() {
  this.gameActive = false;
};

//resume the journey
OregonH.Game.resumeJourney = function() {
  this.gameActive = true;
  this.step();
};


//init game
OregonH.Game.init();
