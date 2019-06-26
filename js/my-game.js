
const canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');
ctx.font = '30px Mali';
let level = 0;

// ctx.fillStyle = 'red';
// ctx.fillRect(100, 100, 50, 50)

let teacherArr = [37, 38, 39, 40];
let studentArr = [];
let arrPos = 0;
let teacherInterval;
let refreshInterval;

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
let soundsArr = [cOne, d, eb, f, g, ab, a, b, cTwo];
let mjArr = [mjWoo, mjShook, mjHee, mjBaraba];

const playSuccess = () => {
  success.play();
  wow.play();
};

const playBgm = () => bgm.play();

// const playCountIn = () => countIn.play();

let dancePos = 0;
const checkMove = () => {
  if (studentArr[dancePos] === teacherArr[dancePos]) {
    console.log(`teacher: ${teacherArr}`, `student: ${studentArr}`);
    console.log('Groovy!');
    soundsArr[dancePos].play();
    // soundsArr[Math.floor(Math.random() * 12)].play();
    // mjArr[Math.floor(Math.random() * 4)].play();
    dancePos += 1;
    if (teacherArr.length === studentArr.length) {
      groovy();
      console.log(teacherArr);
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
      console.log('my level is:', level);
      console.log('I see you\'ve got some moves... Well then how about THIS?');
    }
  } else {
    console.log('you are not ready!');
    return gameOver();
  }
};

const clearStudent = () => {
  ctx.clearRect(625, 100, 150, 250);
  // ctx.fillRect(100, 100, 50, 50);
};

const clearTeacher = () => {
  ctx.clearRect(200, 10, 150, 340);
};


const groovy = () => {
  const groovyImg = new Image();
  groovyImg.src = 'images/groovy.png';
  groovyImg.onload = () => ctx.drawImage(groovyImg, 625, 0, 150, 150);
};

const clearTLight = () => {
  ctx.clearRect(40, 260, 160, 89);
  ctx.clearRect(350, 260, 160, 89);
};

const clearSLight = () => {
  ctx.clearRect(470, 260, 160, 89);
  ctx.clearRect(780, 260, 160, 89);
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

const discoLine = () => {
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#f700ff';
  ctx.beginPath();
  ctx.moveTo(485, 0);
  ctx.lineTo(485, 54);
  ctx.stroke();
  ctx.closePath();
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
  setTimeout(discoBall, 100);
  setTimeout(discoLine, 200);
  // setTimeout(studentLight, 100);
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
    case 38: //up arrow
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
setTimeout(defaultTeacherPos, 100);
setTimeout(defaultPos, 100);


const makeTeacherDance = () => {
  // countIn.play();
  teacherInterval = setInterval(printTeacherDance, 1050);
};

// const updateEverything = () => {
//   ctx.clearRect(0, 0, 1000, 500);
//   printBg();
//   refreshInterval = setInterval(updateEverything, 20);
// }

const startGame = () => {
  bgm.play();
  ctx.clearRect(0, 0, 1000, 550);
  printBg();
  // updateEverything();
  setTimeout(defaultTeacherPos, 100);
  setTimeout(defaultPos, 100);
  teacherArr = [37, 38, 39, 40];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  level = 0;
  clearSLight();
  // setTimeout(playCountIn, 2000);
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const ggBubble = () => {
  const gameOverBubble = new Image();
  gameOverBubble.src = 'images/speech-bubble_A1.png';
  gameOverBubble.onload = () => ctx.drawImage(gameOverBubble, 210, 290, 740, 150);
};

const gameOverText = () => {
  ctx.fillText("Ya got some moves but ya don't got the groove!", 225, 395);
};

const youWinText = () => ctx.fillText('Wow! MJ would be proud. Groove on brotha!', 260, 395);

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
  ctx.clearRect(625, 0, 150, 150);
  teacherArr = [40, 37, 40, 39, 38, 37];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const levelThree = () => {
  ctx.clearRect(625, 0, 150, 150);
  teacherArr = [39, 38, 40, 37, 38, 39];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
  setTimeout(teacherLight, 4150);
  setTimeout(makeTeacherDance, 3100);
};

const levelFour = () => {
  ctx.clearRect(625, 0, 150, 150);
  teacherArr = [37, 38, 40, 37, 39, 40, 37, 40];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
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

let levelArr = ['first level', levelTwo, levelThree, levelFour];


const nextLevel = () => {
  // ctx.clearRect(625, 0, 150, 150);
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
