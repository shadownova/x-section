const wordList = [
  'ABOUT', 'ALERT', 'ARGUE', 'BEACH',
  'ABOVE', 'ALIKE', 'ARISE', 'BEGAN',
  'ABUSE', 'ALIVE', 'ARRAY', 'BEGIN',
  'ACTOR', 'ALLOW', 'ASIDE', 'BEGUN',
  'ACUTE', 'ALONE', 'ASSET', 'BEING',
  'ADMIT', 'ALONG', 'AUDIO', 'BELOW',
  'ADOPT', 'ALTER', 'AUDIT', 'BENCH',
  'ADULT', 'AMONG', 'AVOID', 'BILLY',
  'AFTER', 'ANGER', 'AWARD', 'BIRTH',
  'AGAIN', 'ANGLE', 'AWARE', 'BLACK',
  'AGENT', 'ANGRY', 'BADLY', 'BLAME',
  'AGREE', 'APART', 'BAKER', 'BLIND',
  'AHEAD', 'APPLE', 'BASES', 'BLOCK',
  'ALARM', 'APPLY', 'BASIC', 'BLOOD',
  'ALBUM', 'ARENA', 'BASIS', 'BOARD',
  'BOOST', 'BUYER', 'CHINA', 'COVER',
  'BOOTH', 'CABLE', 'CHOSE', 'CRAFT',
  'BOUND', 'CALIF', 'CIVIL', 'CRASH',
  'BRAIN', 'CARRY', 'CLAIM', 'CREAM',
  'BRAND', 'CATCH', 'CLASS', 'CRIME',
  'BREAD', 'CAUSE', 'CLEAN', 'CROSS',
  'BREAK', 'CHAIN', 'CLEAR', 'CROWD',
  'BREED', 'CHAIR', 'CLICK', 'CROWN',
  'BRIEF', 'CHART', 'CLOCK', 'CURVE',
  'BRING', 'CHASE', 'CLOSE', 'CYCLE',
  'BROAD', 'CHEAP', 'COACH', 'DAILY',
  'BROKE', 'CHECK', 'COAST', 'DANCE',
  'BROWN', 'CHEST', 'COULD', 'DATED',
  'BUILD', 'CHIEF', 'COUNT', 'DEALT',
  'BUILT', 'CHILD', 'COURT', 'DEATH',
  'DEBUT', 'ENTRY', 'FORTH', 'GROUP',
  'DELAY', 'EQUAL', 'FORTY', 'GROWN',
  'DEPTH', 'ERROR', 'FORUM', 'GUARD',
  'DOING', 'EVENT', 'FOUND', 'GUESS',
  'DOUBT', 'EVERY', 'FRAME', 'GUEST',
  'DOZEN', 'EXACT', 'FRANK', 'GUIDE',
  'DRAFT', 'EXIST', 'FRAUD', 'HAPPY',
  'DRAMA', 'EXTRA', 'FRESH', 'HARRY',
  'DRAWN', 'FAITH', 'FRONT', 'HEART',
  'DREAM', 'FALSE', 'FRUIT', 'HEAVY',
  'DRESS', 'FAULT', 'FULLY', 'HENCE',
  'DRILL', 'FIBRE', 'FUNNY', 'NIGHT',
  'DRINK', 'FIELD', 'GIANT', 'HORSE',
  'DRIVE', 'FIFTH', 'GIVEN', 'HOTEL',
  'DROVE', 'FIFTY', 'GLASS', 'HOUSE',
  'DYING', 'FIGHT', 'GLOBE', 'HUMAN',
  'EAGER', 'FINAL', 'GOING', 'IDEAL',
  'EARLY', 'FIRST', 'GRACE', 'IMAGE',
  'EARTH', 'FIXED', 'GRADE', 'INDEX',
  'EIGHT', 'FLASH', 'GRAND', 'INNER',
  'ELITE', 'FLEET', 'GRANT', 'INPUT',
  'EMPTY', 'FLOOR', 'GRASS', 'ISSUE',
  'ENEMY', 'FLUID', 'GREAT', 'IRONY',
  'ENJOY', 'FOCUS', 'GREEN', 'JUICE',
  'ENTER', 'FORCE', 'GROSS', 'JOINT',
  'JUDGE', 'METAL', 'MEDIA', 'NEWLY',
  'KNOWN', 'LOCAL', 'MIGHT', 'NOISE',
  'LABEL', 'LOGIC', 'MINOR', 'NORTH',
  'LARGE', 'LOOSE', 'MINUS', 'NOTED',
  'LASER', 'LOWER', 'MIXED', 'NOVEL',
  'LATER', 'LUCKY', 'MODEL', 'NURSE',
  'LAUGH', 'LUNCH', 'MONEY', 'OCCUR',
  'LAYER', 'LYING', 'MONTH', 'OCEAN',
  'LEARN', 'MAGIC', 'MORAL', 'OFFER',
  'LEASE', 'MAJOR', 'MOTOR', 'OFTEN',
  'LEAST', 'MAKER', 'MOUNT', 'ORDER',
  'LEAVE', 'MARCH', 'MOUSE', 'OTHER',
  'LEGAL', 'MUSIC', 'MOUTH', 'OUGHT',
  'LEVEL', 'MATCH', 'MOVIE', 'PAINT',
  'LIGHT', 'MAYOR', 'NEEDS', 'PAPER',
  'LIMIT', 'MEANT', 'NEVER', 'PARTY',
  'PEACE', 'POWER', 'RADIO', 'ROUND',
  'PANEL', 'PRESS', 'RAISE', 'ROUTE',
  'PHASE', 'PRICE', 'RANGE', 'ROYAL',
  'PHONE', 'PRIDE', 'RAPID', 'RURAL',
  'PHOTO', 'PRIME', 'RATIO', 'SCALE',
  'PIECE', 'PRINT', 'REACH', 'SCENE',
  'PILOT', 'PRIOR', 'READY', 'SCOPE',
  'PITCH', 'PRIZE', 'REFER', 'SCORE',
  'PLACE', 'PROOF', 'RIGHT', 'SENSE',
  'PLAIN', 'PROUD', 'RIVAL', 'SERVE',
  'PLANE', 'PROVE', 'RIVER', 'SEVEN',
  'PLANT', 'QUEEN', 'QUICK', 'SHALL',
  'PLATE', 'SIXTH', 'STAND', 'SHAPE',
  'POINT', 'QUIET', 'ROMAN', 'SHARE',
  'POUND', 'QUITE', 'ROUGH', 'SHARP',
  'SHEET', 'SPARE', 'STYLE', 'TIMES',
  'SHELF', 'SPEAK', 'SUGAR', 'TIRED',
  'SHELL', 'SPEED', 'SUITE', 'TITLE',
  'SHIFT', 'SPEND', 'SUPER', 'TODAY',
  'SHIRT', 'SPENT', 'SWEET', 'TOPIC',
  'SHOCK', 'SPLIT', 'TABLE', 'TOTAL',
  'SHOOT', 'SPOKE', 'TAKEN', 'TOUCH',
  'SHORT', 'SPORT', 'TASTE', 'TOUGH',
  'SHOWN', 'STAFF', 'TAXES', 'TOWER',
  'SIGHT', 'STAGE', 'TEACH', 'TRACK',
  'SINCE', 'STAKE', 'TEETH', 'TRADE',
  'SIXTY', 'START', 'TEXAS', 'TREAT',
  'SIZED', 'STATE', 'THANK', 'TREND',
  'SKILL', 'STEAM', 'THEFT', 'TRIAL',
  'SLEEP', 'STEEL', 'THEIR', 'TRIED',
  'SLIDE', 'STICK', 'THEME', 'TRIES',
  'SMALL', 'STILL', 'THERE', 'TRUCK',
  'SMART', 'STOCK', 'THESE', 'TRULY',
  'SMILE', 'STONE', 'THICK', 'TRUST',
  'SMITH', 'STOOD', 'THING', 'TRUTH',
  'SMOKE', 'STORE', 'THINK', 'TWICE',
  'SOLID', 'STORM', 'THIRD', 'UNDER',
  'SOLVE', 'STORY', 'THOSE', 'UNDUE',
  'SORRY', 'STRIP', 'THREE', 'UNION',
  'SOUND', 'STUCK', 'THREW', 'UNITY',
  'SOUTH', 'STUDY', 'THROW', 'UNTIL',
  'SPACE', 'STUFF', 'TIGHT', 'UPPER',
  'UPSET', 'WHOLE', 'WASTE', 'WOUND',
  'URBAN', 'WHOSE', 'WATCH', 'WRITE',
  'USAGE', 'WOMAN', 'WATER', 'WRONG',
  'USUAL', 'TRAIN', 'WHEEL', 'WROTE',
  'VALID', 'WORLD', 'WHERE', 'YIELD',
  'VALUE', 'WORRY', 'WHICH', 'YOUNG',
  'VIDEO', 'WORSE', 'WHILE', 'YOUTH',
  'VIRUS', 'WORST', 'WHITE', 'WORTH',
  'VISIT', 'WOULD', 'VITAL', 'VOICE'
];
const alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let words = ['1','1'];
let sectPoints = [];
let gameBoard = [
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','','']
];
let selected = [];
let hint1 = 0;

function start(){
  genPoints();

  while(!unique(words)){
    words=[];
    genWords();
  }
  fillBoard();
  scrambleBoard();
  updatePage();
}

function genPoints(){
  sectPoints.push([rand(1,2), rand(1,2)]);
  sectPoints.push([sectPoints[0][0], rand(sectPoints[0][1]+1,3)]);
  sectPoints.push([rand(sectPoints[1][0]+1,3), sectPoints[1][1]]);
  sectPoints.push([sectPoints[2][0], sectPoints[0][1]]);
}

function genWords(){
  words.push(wordList[Math.floor(Math.random()*wordList.length)]);
  let wList2 = getWordList(words[0][sectPoints[1][1]],sectPoints[1][0]);
  let wList3 = [];
  let wList4 = [];
  let word2 = '';
  let word3 = '';
  for(var i in wList2){
    word2 = wList2[Math.floor(Math.random()*wList2.length)];
    wList3 = getWordList(word2[sectPoints[2][0]],sectPoints[2][1]);
    for(var j in wList3){
      word3 = wList3[Math.floor(Math.random()*wList3.length)];
      wList4 = getWordList([words[0][sectPoints[0][1]],word3[sectPoints[3][1]]], [sectPoints[0][0], sectPoints[3][0]])
      if(wList4.length >= 1){
        words.push(word2, word3, wList4[Math.floor(Math.random()*wList4.length)]);
        return;
      }
    }
  }
  // genWords();
  console.log("no Solution found");
}

function getWordList(letter, pos){
  let list = [];
  if(letter.length > 1){
    for(var i in wordList){
      if(wordList[i][pos[0]] == letter[0]){
        list.push(wordList[i]);
      }
    }
    let finalList = [];
    for(var i in list){
      if(list[i][pos[1]] == letter[1]){
        finalList.push(list[i]);
      }
    }
    return finalList;
  }
  else{
    for(var i in wordList){
      if(wordList[i][pos] == letter){
        list.push(wordList[i]);
      }
    }
    return list;
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillBoard(){
  for(var i in words){
    if(i%2 == 0){
      for(var j = 0; j < 5; j++){
        gameBoard[sectPoints[i][0]][j] = words[i][j];
      }
    }
    else{
      for(var j = 0; j < 5; j++){
        gameBoard[j][sectPoints[i][1]] = words[i][j];
      }
    }
  }

  for(var i = 1; i < 4; i++){
    if(gameBoard[0][i] == ''){
      gameBoard[0][i] = alph[Math.floor(Math.random()*alph.length)];
    }
  }
  for(var i = 1; i < 4; i++){
    if(gameBoard[i][4] == ''){
      gameBoard[i][4] = alph[Math.floor(Math.random()*alph.length)];
    }
  }
  for(var i = 1; i < 4; i++){
    if(gameBoard[4][i] == ''){
      gameBoard[4][i] = alph[Math.floor(Math.random()*alph.length)];
    }
  }
  for(var i = 1; i < 4; i++){
    if(gameBoard[i][0] == ''){
      gameBoard[i][0] = alph[Math.floor(Math.random()*alph.length)];
    }
  }
}

function scrambleBoard(){
  let array = [];
  for(var i = 1; i < 4; i++){
    for(var j = 1; j < 4; j++){
      array.push(gameBoard[i][j]);
    }
  }
  shuffle(array);
  for(var i = 1; i < 4; i++){
    for(var j = 1; j < 4; j++){
      gameBoard[i][j] = array.pop();
    }
  }
}

function updatePage(){
  for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
      document.getElementById("block"+i+j).innerHTML = gameBoard[i][j];
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function bClick(row, col){
  if(selected.length < 1){
    document.getElementById("block"+row+col).className = "blockSelected";
    selected = [row, col];
  }
  else{
    let holder = gameBoard[selected[0]][selected[1]];
    gameBoard[selected[0]][selected[1]] = gameBoard[row][col];
    gameBoard[row][col] = holder;
    document.getElementById("block"+selected[0]+selected[1]).className = "block";
    document.getElementById("block"+selected[0]+selected[1]).innerHTML = gameBoard[selected[0]][selected[1]];
    document.getElementById("block"+row+col).innerHTML = gameBoard[row][col];
    if(hint1){
      highlight();
    }
    selected = [];
  }
}

function unique(myArray) {
  return myArray.length === new Set(myArray).size;
}

function hint(){
  highlight();
  hint1 = 1;
}

//Test Functions
function clearHighlight(){
  for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
      document.getElementById("block"+i+j).className = "block";
    }
  }
}

function highlight(){
  for(var i in sectPoints){
    document.getElementById("block"+sectPoints[i][0]+sectPoints[i][1]).className = "blockHint"
  }
}
