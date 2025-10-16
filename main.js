/* main.js - revised for improved UI/UX
   preserves your logic but adds new UI interactions:
   - Selected glow
   - Swap pulse animation
   - New Game and status text updates
   - Colored hints for each solution word
*/

const wordList = [
  /* (same wordList as before) */
  'ABOUT','ALERT','ARGUE','BEACH','ABOVE','ALIKE','ARISE','BEGAN','ABUSE','ALIVE','ARRAY','BEGIN','ACTOR','ALLOW','ASIDE','BEGUN','ACUTE','ALONE','ASSET','BEING','ADMIT','ALONG','AUDIO','BELOW','ADOPT','ALTER','AUDIT','BENCH','ADULT','AMONG','AVOID','AFTER','ANGER','AWARD','BIRTH','AGAIN','ANGLE','AWARE','BLACK','AGENT','ANGRY','BADLY','BLAME','AGREE','APART','BAKER','BLIND','AHEAD','APPLE','BASES','BLOCK','ALARM','APPLY','BASIC','BLOOD','ALBUM','ARENA','BASIS','BOARD','BOOST','BUYER','CHINA','COVER','BOOTH','CABLE','CHOSE','CRAFT','BOUND','CALIF','CIVIL','CRASH','BRAIN','CARRY','CLAIM','CREAM','BRAND','CATCH','CLASS','CRIME','BREAD','CAUSE','CLEAN','CROSS','BREAK','CHAIN','CLEAR','CROWD','BREED','CHAIR','CLICK','CROWN','BRIEF','CHART','CLOCK','CURVE','BRING','CHASE','CLOSE','CYCLE','BROAD','CHEAP','COACH','DAILY','BROKE','CHECK','COAST','DANCE','BROWN','CHEST','COULD','DATED','BUILD','CHIEF','COUNT','DEALT','BUILT','CHILD','COURT','DEATH','DEBUT','ENTRY','FORTH','GROUP','DELAY','EQUAL','FORTY','GROWN','DEPTH','ERROR','FORUM','GUARD','DOING','EVENT','FOUND','GUESS','DOUBT','EVERY','FRAME','GUEST','DOZEN','EXACT','FRANK','GUIDE','DRAFT','EXIST','FRAUD','HAPPY','DRAMA','EXTRA','FRESH','HARRY','DRAWN','FAITH','FRONT','HEART','DREAM','FALSE','FRUIT','HEAVY','DRESS','FAULT','FULLY','HENCE','DRILL','FIBRE','FUNNY','NIGHT','DRINK','FIELD','GIANT','HORSE','DRIVE','FIFTH','GIVEN','HOTEL','DROVE','FIFTY','GLASS','HOUSE','DYING','FIGHT','GLOBE','HUMAN','EAGER','FINAL','GOING','IDEAL','EARLY','FIRST','GRACE','IMAGE','EARTH','FIXED','GRADE','INDEX','EIGHT','FLASH','GRAND','INNER','ELITE','FLEET','GRANT','INPUT','EMPTY','FLOOR','GRASS','ISSUE','ENEMY','FLUID','GREAT','IRONY','ENJOY','FOCUS','GREEN','JUICE','ENTER','FORCE','GROSS','JOINT','JUDGE','METAL','MEDIA','NEWLY','KNOWN','LOCAL','MIGHT','NOISE','LABEL','LOGIC','MINOR','NORTH','LARGE','LOOSE','MINUS','NOTED','LASER','LOWER','MIXED','NOVEL','LATER','LUCKY','MODEL','NURSE','LAUGH','LUNCH','MONEY','OCCUR','LAYER','LYING','MONTH','OCEAN','LEARN','MAGIC','MORAL','OFFER','LEASE','MAJOR','MOTOR','OFTEN','LEAST','MAKER','MOUNT','ORDER','LEAVE','MARCH','MOUSE','OTHER','LEGAL','MUSIC','MOUTH','OUGHT','LEVEL','MATCH','MOVIE','PAINT','LIGHT','MAYOR','NEEDS','PAPER','LIMIT','MEANT','NEVER','PARTY','PEACE','POWER','RADIO','ROUND','PANEL','PRESS','RAISE','ROUTE','PHASE','PRICE','RANGE','ROYAL','PHONE','PRIDE','RAPID','RURAL','PHOTO','PRIME','RATIO','SCALE','PIECE','PRINT','REACH','SCENE','PILOT','PRIOR','READY','SCOPE','PITCH','PRIZE','REFER','SCORE','PLACE','PROOF','RIGHT','SENSE','PLAIN','PROUD','RIVAL','SERVE','PLANE','PROVE','RIVER','SEVEN','PLANT','QUEEN','QUICK','SHALL','PLATE','SIXTH','STAND','SHAPE','POINT','QUIET','ROMAN','SHARE','POUND','QUITE','ROUGH','SHARP','SHEET','SPARE','STYLE','TIMES','SHELF','SPEAK','SUGAR','TIRED','SHELL','SPEED','SUITE','TITLE','SHIFT','SPEND','SUPER','TODAY','SHIRT','SPENT','SWEET','TOPIC','SHOCK','SPLIT','TABLE','TOTAL','SHOOT','SPOKE','TAKEN','TOUCH','SHORT','SPORT','TASTE','TOUGH','SHOWN','STAFF','TAXES','TOWER','SIGHT','STAGE','TEACH','TRACK','SINCE','STAKE','TEETH','TRADE','SIXTY','START','TEXAS','TREAT','SIZED','STATE','THANK','TREND','SKILL','STEAM','THEFT','TRIAL','SLEEP','STEEL','THEIR','TRIED','SLIDE','STICK','THEME','TRIES','SMALL','STILL','THERE','TRUCK','SMART','STOCK','THESE','TRULY','SMILE','STONE','THICK','TRUST','SMITH','STOOD','THING','TRUTH','SMOKE','STORE','THINK','TWICE','SOLID','STORM','THIRD','UNDER','SOLVE','STORY','THOSE','UNDUE','SORRY','STRIP','THREE','UNION','SOUND','STUCK','THREW','UNITY','SOUTH','STUDY','THROW','UNTIL','SPACE','STUFF','TIGHT','UPPER','UPSET','WHOLE','WASTE','WOUND','URBAN','WHOSE','WATCH','WRITE','USAGE','WOMAN','WATER','WRONG','USUAL','TRAIN','WHEEL','WROTE','VALID','WORLD','WHERE','YIELD','VALUE','WORRY','WHICH','YOUNG','VIDEO','WORSE','WHILE','YOUTH','VIRUS','WORST','WHITE','WORTH','VISIT','WOULD','VITAL','VOICE'
];

const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let words = ['1','1'];
let sectPoints = [];
let gameBoard = Array.from({length:5},()=>Array.from({length:5},()=>''));
let selected = [];
let hint1 = 0;

// colors for the 4 words (order maps to sectPoints indices)
const wordColors = [
  getComputedStyle(document.documentElement).getPropertyValue('--color-word-0') || '#e76f51',
  getComputedStyle(document.documentElement).getPropertyValue('--color-word-1') || '#3a86ff',
  getComputedStyle(document.documentElement).getPropertyValue('--color-word-2') || '#ffbe0b',
  getComputedStyle(document.documentElement).getPropertyValue('--color-word-3') || '#83c5be'
].map(s => s.trim());

function start(){
  // reset variables
  words = [];
  sectPoints = [];
  gameBoard = Array.from({length:5},()=>Array.from({length:5},()=>''));
  selected = [];
  hint1 = 0;
  clearAllHints();
  clearWinColoring();
  genPoints();

  genWords();
  while(!unique(words)){
    words=[];
    genWords();
  }
  fillBoard();
  scrambleBoard();
  updatePage();
  setStatus('Swap letters in the middle 3×3 to form four 5-letter words.');
}

function newGame(){
  start();
}

/* -------------------
   Puzzle generation (unchanged logic aside from small cleanups)
   ------------------- */

function genPoints(){
  // build a cross-of-4 points pattern similar to your original
  sectPoints.push([rand(1,2), rand(1,2)]);
  sectPoints.push([sectPoints[0][0], rand(sectPoints[0][1]+1,3)]);
  sectPoints.push([rand(sectPoints[1][0]+1,3), sectPoints[1][1]]);
  sectPoints.push([sectPoints[2][0], sectPoints[0][1]]);
}

function genWords(){
  count = 0;
  while(1==1){
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
          // console.log(count);
          return;
        }
      }
    }
    count++;
    words = [];
    if(count>10){
      console.log("10 failed solutions!")
      return;
    }
  }
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

/* -------------------
   Board setup
   ------------------- */

function fillBoard(){
  // place two rows and two columns according to sectPoints and the words
  for(let i=0;i<words.length;i++){
    if(i%2 == 0){
      // even index -> place as a row at sectPoints[i][0]
      for(let j=0;j<5;j++){
        gameBoard[sectPoints[i][0]][j] = words[i][j];
      }
    } else {
      // odd index -> place as a column at sectPoints[i][1]
      for(let j=0;j<5;j++){
        gameBoard[j][sectPoints[i][1]] = words[i][j];
      }
    }
  }

  // fill outer blanks with random letters
  for(let i=1;i<4;i++){
    if(!gameBoard[0][i]) gameBoard[0][i] = randomLetter();
    if(!gameBoard[4][i]) gameBoard[4][i] = randomLetter();
    if(!gameBoard[i][0]) gameBoard[i][0] = randomLetter();
    if(!gameBoard[i][4]) gameBoard[i][4] = randomLetter();
  }
}

function randomLetter(){
  return alph[Math.floor(Math.random()*alph.length)];
}

function scrambleBoard(){
  let array = [];
  for(let i=1;i<4;i++){
    for(let j=1;j<4;j++){
      array.push(gameBoard[i][j]);
    }
  }
  shuffle(array);
  for(let i=1;i<4;i++){
    for(let j=1;j<4;j++){
      gameBoard[i][j] = array.pop();
    }
  }
}

/* -------------------
   Rendering / UI
   ------------------- */

function updatePage(){
  // clear inline styles and classes for all blocks first
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
      const el = document.getElementById('block'+r+c);
      if(!el) continue;
      // Reset class depending on if it's a middle tile
      if(r>=1 && r<=3 && c>=1 && c<=3){
        el.className = 'block Move';
      } else {
        el.className = 'block Locked';
      }
      // remove any background color applied for hint
      el.style.background = '';
      el.style.color = '';
      el.style.borderColor = '';
      el.classList.remove('swapping');
      el.classList.remove('Selected');
      el.innerHTML = gameBoard[r][c] || '';
    }
  }
}

function setStatus(txt){
  const s = document.getElementById('status');
  if(s) s.textContent = txt;
}

function toggleHelp(){
  const modal = document.getElementById('helpModal');
  if(!modal) return;
  modal.classList.toggle('hidden');
}

/* -------------------
   Interaction: click-to-swap
   ------------------- */

function bClick(row, col){
  // ignore clicks outside the middle 3x3
  if(row < 1 || row > 3 || col < 1 || col > 3) return;

  const id = 'block'+row+col;
  const el = document.getElementById(id);

  if(selected.length < 1){
    // select this tile
    selected = [row, col];
    // visually mark
    el.classList.add('Selected');
    setStatus('Tile selected — tap another to swap.');
  } else {
    const prev = selected.slice();
    // If clicking the same tile, deselect
    if(prev[0] === row && prev[1] === col){
      el.classList.remove('Selected');
      selected = [];
      setStatus('Selection cleared.');
      return;
    }

    // perform swap in gameBoard
    const holder = gameBoard[prev[0]][prev[1]];
    gameBoard[prev[0]][prev[1]] = gameBoard[row][col];
    gameBoard[row][col] = holder;

    // Visual swap pulse: add swapping class briefly to both
    const elPrev = document.getElementById('block'+prev[0]+prev[1]);
    const elCurr = document.getElementById(id);

    // make sure displayed content updates smoothly
    elPrev.classList.remove('Selected');
    elPrev.classList.add('swapping');
    elCurr.classList.add('swapping');

    // update innerHTML immediately for accessibility
    elPrev.innerHTML = gameBoard[prev[0]][prev[1]];
    elCurr.innerHTML = gameBoard[row][col];

    // clear swapping class after a short delay
    setTimeout(()=> {
      elPrev.classList.remove('swapping');
      elCurr.classList.remove('swapping');
      // if hints were on, keep hints visible
      if(hint1) highlight();
    }, 140);

    // reset selected and check win
    selected = [];
    checkWin();
    setStatus('Swapped tiles.');
  }
}

/* -------------------
   Utility
   ------------------- */

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
function unique(myArray) { return myArray.length === new Set(myArray).size; }

/* -------------------
   Hint / Highlight / Win detection
   ------------------- */

function clearAllHints(){
  // remove inline styles and hint classes
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
      let el = document.getElementById('block'+r+c);
      if(!el) continue;
      el.classList.remove('Hint');
      el.style.background = '';
      el.style.borderColor = '';
    }
  }
  hint1 = 0;
}

function highlight(){
  clearAllHints();
  if(!sectPoints || sectPoints.length < 4) return;

  // For each sectPoint (word) apply its color to that tile
  for(let i=0;i<sectPoints.length;i++){
    const p = sectPoints[i];
    const el = document.getElementById('block'+p[0]+p[1]);
    if(!el) continue;
    el.classList.add('Hint');
    // tint background using rgba to be light but visible
    let hex = wordColors[i] || '#ccc';
    el.style.background = hexToRgba(hex, 0.16);
    el.style.borderColor = hexToRgba(hex, 0.35);
  }
  hint1 = 1;
  setStatus('Hints shown (colored points).');
}

// convert hex color to rgba with alpha
function hexToRgba(hex, alpha){
  let h = hex.replace('#','').trim();
  if(h.length === 3) h = h.split('').map(ch => ch+ch).join('');
  const bigint = parseInt(h,16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hint(){
  highlight();
}

/* -------------------
   Win detection and celebration
   ------------------- */

function checkWin(){
  let rows = ['','',''];
  let cols = ['','',''];

  let rWins = [0,0,0];
  let cWins = [0,0,0];

  rows[0] = gameBoard[1][0]+gameBoard[1][1]+gameBoard[1][2]+gameBoard[1][3]+gameBoard[1][4];
  rows[1] = gameBoard[2][0]+gameBoard[2][1]+gameBoard[2][2]+gameBoard[2][3]+gameBoard[2][4];
  rows[2] = gameBoard[3][0]+gameBoard[3][1]+gameBoard[3][2]+gameBoard[3][3]+gameBoard[3][4];

  cols[0] = gameBoard[0][1]+gameBoard[1][1]+gameBoard[2][1]+gameBoard[3][1]+gameBoard[4][1];
  cols[1] = gameBoard[0][2]+gameBoard[1][2]+gameBoard[2][2]+gameBoard[3][2]+gameBoard[4][2];
  cols[2] = gameBoard[0][3]+gameBoard[1][3]+gameBoard[2][3]+gameBoard[3][3]+gameBoard[4][3];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < wordList.length; j++) {
      if(rows[i] === wordList[j]) {
        rWins[i] = 1; break;
      }
    }
    for (let j = 0; j < wordList.length; j++) {
      if(cols[i] === wordList[j]) {
        cWins[i] = 1; break;
      }
    }
  }

  const rowCount = rWins.reduce((a,b)=>a+b,0);
  const colCount = cWins.reduce((a,b)=>a+b,0);

  // Update status with progress
  if(rowCount+colCount > 0){
    setStatus(`${rowCount} row(s) and ${colCount} column(s) solved.`);
  } else {
    setStatus('Keep going — none of the full words are formed yet.');
  }

  if(rowCount > 1 && colCount > 1){
    win();
  }
}

/* ---------- Helpers to color tiles on win ---------- */

// color constants
const WIN_COLORS = {
  top: '#3a86ff',    // blue
  bottom: '#e76f51', // red
  left: '#ffbe0b',   // yellow
  right: '#83c5be'   // green
};

// clear any win coloring (call from start/newGame)
function clearWinColoring(){
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
      const el = document.getElementById('block'+r+c);
      if(!el) continue;
      // restore basic class
      if(r>=1 && r<=3 && c>=1 && c<=3){
        el.className = 'block Move';
      } else {
        el.className = 'block Locked';
      }
      // remove inline styles & inner wrappers
      el.style.background = '';
      el.style.borderColor = '';
      el.style.color = '';
      // if we injected inner HTML, restore plain letter
      const ch = gameBoard[r][c] || '';
      el.innerHTML = ch;
    }
  }
}

/* Determine which colors apply to a tile and then style it */
function applyWinColorToTile(r, c, colorsArray){
  const el = document.getElementById('block'+r+c);
  if(!el) return;

  // ensure base win class
  el.classList.add('win-colored');

  // if no colors, leave
  if(!colorsArray || colorsArray.length === 0){
    el.style.background = '';
    el.style.borderColor = '';
    el.innerHTML = gameBoard[r][c] || '';
    return;
  }

  // single color: simple translucent background
  if(colorsArray.length === 1){
    const hex = colorsArray[0];
    el.style.background = hexToRgba(hex, 0.20);
    el.style.borderColor = hexToRgba(hex, 0.45);
    // make text readable: if color is dark-ish, use white text
    el.style.color = isColorDark(hex) ? '#fff' : '#111';
    // ensure the letter is the plain char (no extra inner wrapper)
    el.innerHTML = gameBoard[r][c] || '';
    // if text on dark bg, give class
    if(isColorDark(hex)) el.classList.add('win-text-light'); else el.classList.remove('win-text-light');
    return;
  }

  // multiple colors: create blended gradient + show a top ring to suggest weave
  // colorsArray order: we will treat the last color as the topmost
  const top = colorsArray[colorsArray.length-1];
  // create gradient using the colors (semi-transparent)
  const stops = colorsArray.map((h, i) => `${hexToRgba(h, 0.18)} ${Math.round((i/(colorsArray.length))*100)}%`).join(', ');
  el.style.background = `linear-gradient(135deg, ${colorsArray.map(h=>hexToRgba(h,0.18)).join(',')})`;
  el.style.borderColor = hexToRgba(top, 0.45);
  el.style.color = isColorDark(top) ? '#fff' : '#111';
  if(isColorDark(top)) el.classList.add('win-text-light'); else el.classList.remove('win-text-light');

  // build an inner wrapper + ring to show the topmost color as 'over'
  // NOTE: we inject small DOM inside the tile so we can layer ring above background
  const char = gameBoard[r][c] || '';
  el.innerHTML = `<span class="win-inner">${char}<span class="win-ring" style="background:${hexToRgba(top,0.32)}"></span></span>`;
}

/* quick utility: detect perceived darkness of hex color (returns true if dark) */
function isColorDark(hex){
  // convert to RGB and use luminance
  let h = hex.replace('#','');
  if(h.length === 3) h = h.split('').map(x=>x+x).join('');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  // relative luminance formula
  const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
  return lum < 0.55; // threshold tuned for our translucent fills
}

function win(){
  setStatus('🎉 Nice! You solved it!');

  // clear previous win styles
  clearWinColoring();

  // mapping: row/col indices that represent the four words (same as checkWin earlier)
  const topRow = 1;    // top horizontal word (row index 1)
  const bottomRow = 3; // bottom horizontal word (row index 3)
  const leftCol = 1;   // left vertical (col index 1)
  const rightCol = 3;  // right vertical (col index 3)

  // Build sets for quick lookup
  const rows = {};
  rows[topRow] = WIN_COLORS.top;
  rows[bottomRow] = WIN_COLORS.bottom;
  const cols = {};
  cols[leftCol] = WIN_COLORS.left;
  cols[rightCol] = WIN_COLORS.right;

  // For each cell, compute which (if any) of the four colors apply
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
      const applied = [];
      if(rows[r]) applied.push(rows[r]);    // horizontal color
      if(cols[c]) applied.push(cols[c]);    // vertical color
      // Note: If a tile is in both a row and a column, `applied` will have two entries.
      // The last color in the array will be treated as "topmost" in our small weave effect.
      applyWinColorToTile(r, c, applied);
    }
  }

  // small celebratory pulse on the board
  const board = document.getElementById('letterContainer');
  if(board){
    board.style.transition = 'transform 260ms ease';
    board.style.transform = 'scale(0.985)';
    setTimeout(()=> { board.style.transform = ''; }, 320);
  }
}

/* -------------------
   Misc helpers
   ------------------- */

function cc(ele, r, g, b){
  const el = document.getElementById(ele);
  if(el) el.style.backgroundColor = `rgb(${r},${g},${b})`;
}
