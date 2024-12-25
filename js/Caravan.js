var OregonH = OregonH || {};

OregonH.Caravan = {};

OregonH.Caravan.init = function(stats){
  this.day = stats.day;
  this.distance = stats.distance;
  this.crew = stats.crew;
  this.food = stats.food;
  this.oxen = stats.oxen;
  this.money = stats.money;
  this.firepower = stats.firepower;
};

//update weight and capacity
OregonH.Caravan.updateWeight = function(){
  var droppedFood = 0;
  var droppedGuns = 0;

  //how much can the caravan carry
  this.capacity = this.oxen * OregonH.WEIGHT_PER_OX + this.crew * OregonH.WEIGHT_PER_PERSON;

  //how much weight do we currently have
  this.weight = this.food * OregonH.FOOD_WEIGHT + this.firepower * OregonH.FIREPOWER_WEIGHT;

  //drop things behind if it's too much weight
  //assume guns get dropped before food
  while(this.firepower && this.capacity <= this.weight) {
    this.firepower--;
    this.weight -= OregonH.FIREPOWER_WEIGHT;
    droppedGuns++;
  }

  if(droppedGuns) {
    this.ui.notify('Left '+droppedGuns+' weapons behind', 'negative');
  }

  while(this.food && this.capacity <= this.weight) {
    this.food--;
    this.weight -= OregonH.FOOD_WEIGHT;
    droppedFood++;
  }

  if(droppedFood) {
    this.ui.notify('Left '+droppedFood+' food provisions behind', 'negative');
  }
};

//update covered distance
OregonH.Caravan.updateDistance = function() {
  //the closer to capacity, the slower
  var diff = this.capacity - this.weight;
  var speed = OregonH.SLOW_SPEED + diff/this.capacity * OregonH.FULL_SPEED;
  if(this.distance==193)
  {
      this.distance +=0.27;
  }
  else
  {
    this.distance += speed;
  }
};

//food consumption
OregonH.Caravan.consumeFood = function() {
  this.food -= this.crew * OregonH.FOOD_PER_PERSON;

  if(this.food < 0) {
    this.food = 0;
  }
};
