const canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 50, 50);
ctx.clearRect(100, 100, 30, 30);
ctx.strokeRect(90, 90, 70, 70);

const teacherArr = [37, 38, 39, 40];
const studentArr = [];

// const checkMoves = () => {
//   for (let i = 0; i < teacherArr.length; i += 1) {
//     if (teacherArr[i] === studentArr[i]) {
//       console.log('Groovy!');
//     } else return console.log('You are not ready yet');
//   }
// };
// checkMoves();

let dancePos = 0;
const checkMove = () => {
  if (studentArr[dancePos] === teacherArr[dancePos]) {
    console.log(`teacher: ${teacherArr}`, `student: ${studentArr}`);
    console.log('Groovy!');
    dancePos += 1;
    if (teacherArr.length === studentArr.length) {
      return console.log('I see you\'ve got some moves... Well then how about THIS?')
    }
  } else {
    return console.log('you are not ready!');
  }
};


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38: // up arrow
      studentArr.push(38);
      checkMove()
      break;
    case 40: // down arrow
    studentArr.push(40);
    checkMove()
      break;
    case 37: // left arrow
    studentArr.push(37);
    checkMove()
      break;
    case 39: // right arrow
    studentArr.push(39);
    checkMove()
      break;
  }
};