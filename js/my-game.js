
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
ctx.font = '30px Mali';
let level = 0;

// ctx.fillStyle = 'red';
// ctx.fillRect(100, 100, 50, 50)

let teacherArr = [37, 38, 39];
let studentArr = [];
let arrPos = 0;
let teacherInterval;
let refreshInterval;
let score = 0;

const dance = new Audio('sounds/game-mp3s/dance.mp3');
const bgm = new Audio('sounds/game-mp3s/billie-jean.mp3');
const gg = new Audio('sounds/game-mp3s/game-over.mp3');
const mjWoo = new Audio('sounds/game-mp3s/mj-woo.mp3');
const mjShook = new Audio('sounds/game-mp3s/mj-shook.mp3');
const mjHee = new Audio('sounds/game-mp3s/mj-heehee.mp3');
const mjBaraba = new Audio('sounds/game-mp3s/mj-baraba.mp3');
const success = new Audio('sounds/game-mp3s/success.mp3');
const wow = new Audio('sounds/wow.mp3');
const countIn = new Audio('sounds/5678-low.m4a');
const congrats = new Audio('sounds/game-mp3s/congrats.mp3');
const cOne = new Audio('sounds/game-mp3s/C.mp3');
const db = new Audio('sounds/game-mp3s/Db.mp3');
const d = new Audio('sounds/game-mp3s/D.mp3');
const eb = new Audio('sounds/game-mp3s/Eb.mp3');
const f = new Audio('sounds/game-mp3s/F.mp3');
const gb = new Audio('sounds/game-mp3s/Gb.mp3');
const g = new Audio('sounds/game-mp3s/G.mp3');
const ab = new Audio('sounds/game-mp3s/Ab.mp3');
const a = new Audio('sounds/game-mp3s/A.mp3');
const bb = new Audio('sounds/game-mp3s/Bb.mp3');
const b = new Audio('sounds/game-mp3s/B.mp3');
const cTwo = new Audio('sounds/game-mp3s/C2.mp3');
const soundsArr = [cOne, d, eb, f, g, ab, a, b, cTwo];

const playSuccess = () => {
  success.play();
  wow.play();
};

const playBgm = () => bgm.play();

// const playCountIn = () => countIn.play();

let dancePos = 0;
const checkMove = () => {
  if (studentArr[dancePos] === teacherArr[dancePos]) {
    soundsArr[dancePos].play();
    dancePos += 1;
    score += 10;
    scoreText(score);
    if (teacherArr.length === studentArr.length) {
      groovy();
      bgm.pause();
      bgm.currentTime = 0;
      setTimeout(playSuccess, 1500);
      if (studentArr.length < 8) {
        setTimeout(playBgm, 4000);
      }
      if (studentArr.length === 8) {
        setTimeout(youWin, 3000);
      } else {
        setTimeout(nextLevel(), 4000);
        setTimeout(clearSLight, 4000);
      }
    }
  } else {
    return gameOver();
  }
};

const clearStudent = () => {
  ctx.clearRect(625, 100, 150, 250);
};

const clearTeacher = () => {
  ctx.clearRect(200, 10, 150, 340);
};

const clearTLight = () => {
  ctx.clearRect(40, 260, 160, 89);
  ctx.clearRect(350, 260, 160, 89);
};

const clearSLight = () => {
  ctx.clearRect(470, 260, 160, 89);
  ctx.clearRect(780, 260, 160, 89);
};

const groovy = () => {
  const groovyImg = new Image();
  groovyImg.src = 'images/groovy.png';
  groovyImg.onload = () => ctx.drawImage(groovyImg, 625, 0, 150, 150);
};

const discoLine = () => {
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#f700ff';
  ctx.beginPath();
  ctx.moveTo(485, 0);
  ctx.lineTo(485, 54);
  ctx.stroke();
  ctx.closePath();
};

const scoreText = (thescore) => {
  ctx.clearRect(620, 0, 200, 100);
  ctx.font = '20px Mali';
  ctx.fillStyle = 'white';
  ctx.fillText(`Groove Level: ${thescore}`, 620, 25);
  ctx.fillStyle = 'black';
};

const lvl1Text = () => {
  ctx.font = '30px Mali';
  ctx.fillText('Afro Sensei: Ya ready? JAMON!', 145, 440);
};

const lvl2Text = () => {
  ctx.font = '20px Mali';
  ctx.fillText('Afro Sensei: Heh, that was just a warmup. The real test begins NOW!', 145, 435);
};

const lvl3Text = () => {
  ctx.font = '28px Mali';
  ctx.fillText('Afro Sensei: Impressive... well how about THIS?!', 145, 440);
};

const lvl4Text = () => {
  ctx.font = '22px Mali';
  ctx.fillText("Afro Sensei: No mo holdin' back. I call this the TRIPLE J MCFUNK!", 140, 435);
};

const gameOverText = () => {
  ctx.font = '30px Mali';
  ctx.fillText("Ya got some moves but ya don't got the groove!", 225, 395);
};

const youWinText = () => {
  ctx.font = '30px Mali';
  ctx.fillText('Wow! MJ would be proud. Groove on brotha!', 260, 395);
};

const teacherLight = () => {
  clearTLight();
  const lightTL = new Image();
  lightTL.src = 'images/dance-floor-left.png';
  lightTL.onload = () => ctx.drawImage(lightTL, 40, 260, 160, 89);
  const lightTR = new Image();
  lightTR.src = 'images/dance-floor-right.png';
  lightTR.onload = () => ctx.drawImage(lightTR, 350, 260, 160, 89);
};

const studentLight = () => {
  clearSLight();
  const lightSL = new Image();
  lightSL.src = 'images/dance-floor-left.png';
  lightSL.onload = () => ctx.drawImage(lightSL, 470, 260, 160, 89);
  const lightSR = new Image();
  lightSR.src = 'images/dance-floor-right.png';
  lightSR.onload = () => ctx.drawImage(lightSR, 780, 260, 160, 89);
};

const textBubble = () => {
  const rectangle = new Image();
  rectangle.src = 'images/speech-bubble_A3.png';
  rectangle.onload = () => ctx.drawImage(rectangle, 120, 380, 740, 100);
};

const ggBubble = () => {
  const gameOverBubble = new Image();
  gameOverBubble.src = 'images/speech-bubble_A1.png';
  gameOverBubble.onload = () => ctx.drawImage(gameOverBubble, 210, 290, 740, 150);
};

const discoBall = () => {
  const discoImg = new Image();
  discoImg.src = 'images/disco-ball.png';
  discoImg.onload = () => ctx.drawImage(discoImg, 410, 0, 150, 175);
};

const printBg = () => {
  const bgImg = new Image();
  bgImg.src = 'images/dance-floor-fade.png';
  bgImg.onload = () => ctx.drawImage(bgImg, 0, 0, 1000, 550);
  discoBall();
  discoLine();
};

const defaultPos = () => {
  const defaultImg = new Image();
  defaultImg.src = 'images/jimmy green/Jimmy-default-GREEN.png';
  defaultImg.onload = () => ctx.drawImage(defaultImg, 625, 100, 150, 250);
};

const leftPos = () => {
  mjBaraba.play();
  const leftImg = new Image();
  leftImg.src = 'images/jimmy green/Jimmy-left-GREEN.png';
  leftImg.onload = () => ctx.drawImage(leftImg, 625, 100, 150, 250);
};

const rightPos = () => {
  mjWoo.play();
  const rightImg = new Image();
  rightImg.src = 'images/jimmy green/Jimmy-right-GREEN.png';
  rightImg.onload = () => ctx.drawImage(rightImg, 625, 100, 150, 250);
};

const downPos = () => {
  mjShook.play();
  const downImg = new Image();
  downImg.src = 'images/jimmy green/JimmyTdown-GREEN.png';
  downImg.onload = () => ctx.drawImage(downImg, 625, 100, 150, 250);
};

const upPos = () => {
  mjHee.play();
  const upImg = new Image();
  upImg.src = 'images/jimmy green/Jimmy-up-GREEN.png';
  upImg.onload = () => ctx.drawImage(upImg, 625, 100, 150, 250);
};

const defaultTeacherPos = () => {
  const defaultTeacherImg = new Image();
  defaultTeacherImg.src = 'images/Jimmy-default.png';
  defaultTeacherImg.onload = () => ctx.drawImage(defaultTeacherImg, 200, 100, 150, 250);
};

const leftTeacherPos = () => {
  mjBaraba.play();
  const leftTeacherImg = new Image();
  leftTeacherImg.src = 'images/Jimmy-left.png';
  leftTeacherImg.onload = () => ctx.drawImage(leftTeacherImg, 200, 100, 150, 250);
  const leftArrow = new Image();
  leftArrow.src = 'images/arrow-left.png';
  leftArrow.onload = () => ctx.drawImage(leftArrow, 236, 10, 332 / 4, 280 / 4);
};

const rightTeacherPos = () => {
  mjWoo.play();
  const rightTeacherImg = new Image();
  rightTeacherImg.src = 'images/Jimmy-right.png';
  rightTeacherImg.onload = () => ctx.drawImage(rightTeacherImg, 200, 100, 150, 250);
  const rightArrow = new Image();
  rightArrow.src = 'images/arrow-right.png';
  rightArrow.onload = () => ctx.drawImage(rightArrow, 236, 10, 332 / 4, 280 / 4);
};

const downTeacherPos = () => {
  mjShook.play();
  const downTeacherImg = new Image();
  downTeacherImg.src = 'images/JimmyTdown.png';
  downTeacherImg.onload = () => ctx.drawImage(downTeacherImg, 200, 100, 150, 250);
  const downArrow = new Image();
  downArrow.src = 'images/arrow-down.png';
  downArrow.onload = () => ctx.drawImage(downArrow, 236, 10, 280 / 4, 332 / 4);
};

const upTeacherPos = () => {
  mjHee.play();
  const upTeacherImg = new Image();
  upTeacherImg.src = 'images/Jimmy-up.png';
  upTeacherImg.onload = () => ctx.drawImage(upTeacherImg, 200, 100, 150, 250);
  const upArrow = new Image();
  upArrow.src = 'images/arrow-up.png';
  upArrow.onload = () => ctx.drawImage(upArrow, 236, 10, 280 / 4, 332 / 4);
};

const printTeacherDance = () => {
  switch (teacherArr[arrPos]) {
    case 38: // up arrow
      clearTeacher();
      upTeacherPos();
      break;
    case 40: // down arrow
      clearTeacher();
      downTeacherPos();
      break;
    case 37: // left arrow
      clearTeacher();
      leftTeacherPos();
      break;
    case 39: // right arrow
      clearTeacher();
      rightTeacherPos();
      break;
    default:
      console.log('teacher did not dance');
  }
  arrPos += 1;
  if (arrPos === teacherArr.length + 1) {
    clearInterval(teacherInterval);
    clearTLight();
    studentLight();
  }
};

printBg();
defaultTeacherPos();
defaultPos();

const makeTeacherDance = () => {
  ctx.clearRect(0, 350, 1000, 250);
  printBg();
  teacherInterval = setInterval(printTeacherDance, 1050);
};

const makeTeacherDanceFaster = () => {
  ctx.clearRect(0, 350, 1000, 250);
  printBg();
  teacherInterval = setInterval(printTeacherDance, 525);
};

const startGame = () => {
  dance.play();
  bgm.play();
  ctx.clearRect(0, 0, 1000, 550);
  printBg();
  teacherArr = [37, 38, 39, 40];
  score = 0;
  level = 0;
  resetValues();
  clearSLight();
  textBubble();
  setTimeout(lvl1Text, 100);
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const resetValues = () => {
  ctx.clearRect(625, 25, 250, 250);
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
};

const gameOver = () => {
  clearInterval(refreshInterval);
  clearInterval(teacherInterval);
  const gameOverImg = new Image();
  gameOverImg.src = 'images/Jimmy-gameover.jpg';
  gameOverImg.onload = () => ctx.drawImage(gameOverImg, 0, 0, 1000, 550);
  setTimeout(ggBubble, 1000);
  setTimeout(gameOverText, 1100);
  bgm.pause();
  bgm.currentTime = 0;
  gg.play();
};

const levelTwo = () => {
  teacherArr = [40, 37, 40, 39, 38];
  resetValues();
  textBubble();
  setTimeout(lvl2Text, 20);
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const levelThree = () => {
  teacherArr = [39, 38, 40, 37, 38, 39];
  resetValues();
  textBubble();
  setTimeout(lvl3Text, 20);
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const levelFour = () => {
  teacherArr = [37, 38, 40, 37, 39, 40, 37, 38];
  resetValues();
  textBubble();
  setTimeout(lvl4Text, 20);
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const youWin = () => {
  clearInterval(refreshInterval);
  clearInterval(teacherInterval);
  const youWinImg = new Image();
  youWinImg.src = 'images/you-win.jpg';
  youWinImg.onload = () => ctx.drawImage(youWinImg, 0, 0, 1000, 550);
  setTimeout(ggBubble, 3900);
  setTimeout(youWinText, 4000);
  bgm.pause();
  bgm.currentTime = 0;
  congrats.play();
};

const levelArr = ['first level', levelTwo, levelThree, levelFour];

const nextLevel = () => {
  level += 1;
  return levelArr[level];
};

document.onkeydown = function(e) {
  clearTLight();
  studentLight();
  switch (e.keyCode) {
    case 38: // up arrow
      studentArr.push(38);
      clearStudent();
      upPos();
      checkMove();
      break;
    case 40: // down arrow
    studentArr.push(40);
    clearStudent();
    downPos();
    checkMove();
    break;
    case 37: // left arrow
    studentArr.push(37);
    clearStudent();
    leftPos();
    checkMove();
      break;
    case 39: // right arrow
    studentArr.push(39);
    clearStudent();
    rightPos();
    checkMove();
      break;
    default:
      console.log('use arrow keys!');
  }
};
