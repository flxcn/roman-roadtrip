var OregonH = OregonH || {};

OregonH.Event = {};


OregonH.Event.eventTypes = [
  {
    type: 'HISTORY',
    notification: 'neutral',
    text: 'January 1st, 193 AD\n\nYou are a young citizen of Rome, the greatest city in the universe.\n\n Suddenly, you hear word that last night, the emperor, COMMODUS, was assassinated. Rumours point to the Praetorian Guard as the murderers.\n\n\nUnbeknownst to you, the Year of the Five Emperors is about to begin.\n\n\n'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'March 28th, 193 AD\n\nAlas! Unhappy with the attempts of PERTINAX to reform the Praetorian Guard, members of the guard itself are planning an assassination.\n\n They have presented you with an ultimatum: \"Join the conspirators, or die along with the emperor.\"\n\nWhat will you choose?\n\n\n\n'
  },
  {
    type: 'HISTORY',
    notification: 'negative',
    text: 'June 1st, 193 AD\n\nDIDIUS JULIANUS, having purchased the position of the Roman Emperor from the Praetorian Guard, serves for just a few months before SEPTIMIUS SEVERUS marches on Rome to become the emperor. He easily puts down the following two challengers, and establishes the Severan Dynasty.\n\nHowever, just thirty years later, Alexander Severus, a descendant, is killed by his own troops, sparking the CRISIS OF THE THIRD CENTURY (235-284)\n\n\n\n\n\n\n\n'
  },
  {
    type: 'HISTORY',
    notification: 'negative',
    text: '235-284AD\n\nYou enter a period of history known as the CRISIS OF THE THIRD CENTURY, as one usurper after another attempts to claim the empire for himself, weakening the state\'s ability to defend itself. You wonder if the once proud empire will collapse within your lifetime. At this time, Rome needs a influential and authoritative leader to stabilize the empire, but there are none to be found.\n\n\n\n\n\n\n\n'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'crew',
    value: -5,
    text: '249-252AD The Plague of Cyprian breaks out. 5 of your soldiers die quickly.\n\n\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'HISTORY',
    notification: 'negative',
    text: '260-268AD\n\nAfter several years of turmoil, the great Roman state is broken up into 3 competing empires: the Gallic Empire in the west, the Palmyrene Empire in the east, and the Roman Empire in between. It will take 6 more years for the empire to be reunited. Ultimately, many prosperous cities in the west are damaged beyond repair, causing further trauma to the trade networks.\n\n\n\n\n\n\n\n'
  },
  {
    type: 'HISTORY',
    notification: 'negative',
    text: 'PRINCIPATE VS. DOMINATE\n\n As stability begins to return, you notice the marked shift between the Principate, the beginning of your journey, and the Dominate, the current time period. You realize that the facades of the republic have been torn down, replaced by a few strongmen at the heart of the empire. The emperor, originally titled "Princeps Civitatis" (first among equals) is now addressed as "Dominus" (master). The senate is powerless, the system more bureaucratic and autocratic.  \n\n\n\n\n\n\n\n'
  },







  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'money',
    value: -50,
    text: 'Due to external threats, the government is unable to protect its citizens. You spend 50 denarii on thick walls to surround your home.\n\n\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'oxen',
    value: -1,
    text: 'Riots break out in Rome. 1 oxen from your team (Iugum) is stolen. \n\n\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 20,
    text: 'Unable to rely on grain from other parts of the Empire, you secure farming land and hire workers to farm the land. These people represent what would later become the serfdom in the Middle Ages.\n You gain 20 pounds of food.  \n\n\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'The Praetorian Guard, unsatisfied with the current rulers, stage an uprising. You sense a pattern, and make a mental note to never trust those guards.\n\nWill you join them?\n\n\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'A popular general from a far region of the empire is attempting to seize the throne. If successful, he will become yet another barrack emperor. By abandoning his post to pursue his ambitions, he leaves behind gaps in the empire\'s defenses, further destabilizing the empire.\n\nDo you stand with the emperor, or do you defect?\n\n\n\n\n\n\n\n\n\n\n'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'oxen',
    value: 1,
    text: 'Found wild oxen. Number of oxen added to you team (Iugum) : '
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'You have stumbled upon a corrupt official, who offers you some empire resources at a \"fair\" price. \n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    products: [
      {item: 'food', qty: 20, price: 50, alt: 'Cibus'},
      {item: 'oxen', qty: 1, price: 200, alt: 'Iugum'},
      {item: 'firepower', qty: 2, price: 50, alt: 'Armis'},
      {item: 'crew', qty: 5, price: 80, alt: 'Milites'}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'You have discovered an obscure shop. The owner\'s seem suspicious, but the products are attractive.\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    products: [
      {item: 'food', qty: 30, price: 50, alt: 'Cibus'},
      {item: 'oxen', qty: 1, price: 200, alt: 'Iugum'},
      {item: 'firepower', qty: 2, price: 20, alt: 'Armis'},
      {item: 'crew', qty: 10, price: 80, alt: 'Milites'}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'After the vast Roman trade network broke down, resources are getting hard to find. Because the empire and its borders are less secure, security has decreased greatly. You stumble upon a group of smugglers carrying goods.\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    products: [
      {item: 'food', qty: 20, price: 60, alt: 'Cibus'},
      {item: 'oxen', qty: 1, price: 300, alt: 'Iugum'},
      {item: 'firepower', qty: 2, price: 80, alt: 'Armis'},
      {item: 'crew', qty: 5, price: 60, alt: 'Milites'}
    ]
  },
];

  var eventIndex = -1;
OregonH.Event.generateEvent = function(){
  //increment
  if(this.caravan.distance<194 && eventIndex<2){
    eventIndex ++;
  }
  else if(this.caravan.distance<194 && eventIndex>=2) {
    eventIndex = 8;
    this.caravan.distance = 194;
  }
  else if(Math.floor(this.caravan.distance)==235){
    eventIndex = 3; //certain announcment for stuff
  }
  else if(Math.floor(this.caravan.distance)==249){
    eventIndex = 4; //certain announcment for stuff
  }
  else if(Math.floor(this.caravan.distance)==260){
    eventIndex = 5; //certain announcment for stuff
  }
  else if(Math.floor(this.caravan.distance)==284){
    eventIndex = 6; //certain announcment for stuff
  }
  else if(Math.floor(this.caravan.distance)==200){
    eventIndex = 7; //certain announcment for stuff
  }
  else {
    eventIndex = Math.floor(Math.random() * (this.eventTypes.length-8))+8;
  }
  var eventData = this.eventTypes[eventIndex];

  //events that consist in updating a stat
  if(eventData.type == 'STAT-CHANGE') {
    this.stateChangeEvent(eventData);
  }
  //history
  else if(eventData.type == 'HISTORY') {
    this.game.pauseJourney();
    this.ui.notify(eventData.text, eventData.notification);
    this.historyEvent();
  }

  //shops
  else if(eventData.type == 'SHOP') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.shopEvent(eventData);
  }

  //attacks
  else if(eventData.type == 'ATTACK') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.attackEvent(eventData);
  }
};

OregonH.Event.stateChangeEvent = function(eventData) {
  //can't have negative quantities
  if(eventData.value + this.caravan[eventData.stat] >= 0) {
    this.caravan[eventData.stat] += eventData.value;
    this.ui.notify(eventData.text + Math.abs(eventData.value) + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n', eventData.notification);
  }
};

OregonH.Event.shopEvent = function(eventData) {
  //number of products for sale
  var numProds = Math.ceil(Math.random() * 4);

  //product list
  var products = [];
  var j, priceFactor;

  for(var i = 0; i < numProds; i++) {
    //random product
    j = Math.floor(Math.random() * eventData.products.length);

    //multiply price by random factor +-30%
    priceFactor = 0.7 + 0.6 * Math.random();

    products.push({
      item: eventData.products[j].item,
      qty: eventData.products[j].qty,
      price: Math.round(eventData.products[j].price * priceFactor),
      alt: eventData.products[j].alt
    });
  }

  this.ui.showShop(products);
};

//prepare an attack event
OregonH.Event.attackEvent = function(eventData){
  var firepower = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_FIREPOWER_AVG);
  var gold = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_GOLD_AVG);

  this.ui.showAttack(firepower, gold);
};

//prepare a history eventTypes
OregonH.Event.historyEvent = function(){
  this.ui.showHistory();
}
