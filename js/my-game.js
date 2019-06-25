
const canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');
ctx.font = '30px Arial';
let level = 0;

ctx.fillStyle = 'red';
// ctx.fillRect(100, 100, 50, 50)

let teacherArr = [37, 38, 39, 40];
let studentArr = [];
let arrPos = 0;
let teacherInterval;


let dancePos = 0;
const checkMove = () => {
  if (studentArr[dancePos] === teacherArr[dancePos]) {
    console.log(`teacher: ${teacherArr}`, `student: ${studentArr}`);
    console.log('Groovy!');
    dancePos += 1;
    if (teacherArr.length === studentArr.length) {
      // console.log(nextLevel())
      console.log(teacherArr);
      setTimeout(nextLevel(), 2000);
      console.log('my level is:', level);
      console.log('I see you\'ve got some moves... Well then how about THIS?');
    }
  } else {
    console.log('you are not ready!');
    return gameOver();
  }
};

const clearStudent = () => {
  ctx.clearRect(675, 70, 150, 250);
  // ctx.fillRect(100, 100, 50, 50);
};

const clearTeacher = () => {
  ctx.clearRect(200, 70, 150, 250);
};

const printBg = () => {
  const bgImg = new Image();
  bgImg.src = 'images/dance-floor.png';
  bgImg.onload = () => {
    ctx.drawImage(bgImg, 0, 0, 1000, 500);
  };
};

const defaultPos = () => {
  const defaultImg = new Image();
  defaultImg.src = 'images/Jimmy-default.png';
  defaultImg.onload = () => {
    ctx.drawImage(defaultImg, 675, 70, 150, 250);
  };
};

const leftPos = () => {
  const leftImg = new Image();
  leftImg.src = 'images/Jimmy-left.png';
  leftImg.onload = () => {
    ctx.drawImage(leftImg, 675, 70, 150, 250);
  };
};

const rightPos = () => {
  const rightImg = new Image();
  rightImg.src = 'images/Jimmy-right.png';
  rightImg.onload = () => {
    ctx.drawImage(rightImg, 675, 70, 150, 250);
  };
};

const downPos = () => {
  const downImg = new Image();
  downImg.src = 'images/JimmyTdown.png';
  downImg.onload = () => {
    ctx.drawImage(downImg, 675, 70, 150, 250);
  };
};

const upPos = () => {
  const upImg = new Image();
  upImg.src = 'images/Jimmy-up.png';
  upImg.onload = () => {
    ctx.drawImage(upImg, 675, 70, 150, 250);
  };
};

const defaultTeacherPos = () => {
  const defaultTeacherImg = new Image();
  defaultTeacherImg.src = 'images/Jimmy-default.png';
  defaultTeacherImg.onload = () => {
    ctx.drawImage(defaultTeacherImg, 200, 70, 150, 250);
  };
};

const leftTeacherPos = () => {
  const leftTeacherImg = new Image();
  leftTeacherImg.src = 'images/Jimmy-left.png';
  leftTeacherImg.onload = () => {
    ctx.drawImage(leftTeacherImg, 200, 70, 150, 250);
  };
};

const rightTeacherPos = () => {
  const rightTeacherImg = new Image();
  rightTeacherImg.src = 'images/Jimmy-right.png';
  rightTeacherImg.onload = () => {
    ctx.drawImage(rightTeacherImg, 200, 70, 150, 250);
  };
};

const downTeacherPos = () => {
  const downTeacherImg = new Image();
  downTeacherImg.src = 'images/JimmyTdown.png';
  downTeacherImg.onload = () => {
    ctx.drawImage(downTeacherImg, 200, 70, 150, 250);
  };
};

const upTeacherPos = () => {
  const upTeacherImg = new Image();
  upTeacherImg.src = 'images/Jimmy-up.png';
  upTeacherImg.onload = () => {
    ctx.drawImage(upTeacherImg, 200, 70, 150, 250);
  };
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
  if (arrPos === teacherArr.length) {
    clearInterval(teacherInterval);
  }
};

printBg();
defaultTeacherPos();
defaultPos();


const makeTeacherDance = () => {
  teacherInterval = setInterval(printTeacherDance, 1000);
};

const startGame = () => {
  ctx.clearRect(0, 0, 1000, 500);
  printBg();
  defaultTeacherPos();
  defaultPos();
  teacherArr = [37, 38, 39, 40];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  level = 0;
  makeTeacherDance();
};

const gameOverText = () => ctx.fillText("Ya got some moves but ya don't got the groove!", 150, 350);

const gameOver = () => {
  clearInterval(teacherInterval);
  const gameOverImg = new Image();
  gameOverImg.src = 'images/Jimmy-gameover.jpg';
  gameOverImg.onload = () => {
    ctx.drawImage(gameOverImg, 0, 0, 1000, 500);
  };
  setTimeout(gameOverText, 1000);
};


const levelTwo = () => {
  teacherArr = [40, 37, 40, 39, 38, 37];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
  makeTeacherDance();
};

const levelThree = () => {
  teacherArr = [37, 38, 40, 37, 39, 40, 37, 40];
  studentArr = [];
  arrPos = 0;
  dancePos = 0;
  clearStudent();
  clearTeacher();
  defaultPos();
  defaultTeacherPos();
  makeTeacherDance();
};

let levelArr = ['first level', levelTwo, levelThree];


const nextLevel = () => {
  level += 1;
  return levelArr[level];
};

document.onkeydown = function(e) {
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
