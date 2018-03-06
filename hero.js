let heroes = require('./hero.json');

function averageNetworth(){
  let sum = 0;
  for(i = 0; i < heroes.length ;i++){
    sum += heroes[i].networth;
  }
  return sum/heroes.length;
}
console.log(averageNetworth());

function averageIntLevel(){
  let sum = 0;
  let count = 0;
  for(i = 0; i < heroes.length ; i++){
    if(heroes[i].primary_attribute == 'intelligent'){
      sum += heroes[i].level;
      count++;
    }
  }
  return sum/count;
}
console.log(averageIntLevel());

function mostAssist(){
  let most = 0;
  for(i = 0; i < heroes.length ; i++){
    most = Math.max(most,heroes[i].assist);
  }
  return most;
}

console.log(mostAssist());

function worstKPD(){
  var worst = 0;
  for(i = 0; i < heroes.length ; i++){
    if(heroes[i].death == 0){
      worst = Math.max(worst,heroes[i].kill);
    }
    else {
      worst = Math.max(worst, heroes[i].kill*1.0/heroes[i].death);
    }
  }
  return worst;
}
console.log(worstKPD());
