const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

let isXTurn = true;
let xScore = 0;
let oScore = 0;

function changeToMark(event) {
  const container = event.currentTarget;

  // Only place a mark if the cell is empty
  if (!container.querySelector('img')) {
    const image = document.createElement('img');
    image.src = isXTurn ? X_IMAGE_URL : O_IMAGE_URL;
    // Assign class based on the player's turn for coloring
    image.classList.add(isXTurn ? 'x' : 'o');

    container.appendChild(image);
    isXTurn = !isXTurn;

    // Check if there is a winner
    if (checkWinner()) {
      if (isXTurn) {
        oScore++;
        document.getElementById('o-score').innerText = oScore;
      } else {
        xScore++;
        document.getElementById('x-score').innerText = xScore;
      }
      alert(`${isXTurn ? 'O' : 'X'} wins!`);
      setTimeout(resetBoard, 500); // Delay reset for a moment
    }
  }
}

function checkWinner() {
  const boxes = document.querySelectorAll('#grid div');
  const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]  // Diagonals
  ];

  // Check for a winning combination
  for (let combo of winningCombination) {
    const [a, b, c] = combo;
    const images = boxes[a].querySelector('img')?.classList[0];
    if (images && images === boxes[b].querySelector('img')?.classList[0] && images === boxes[c].querySelector('img')?.classList[0]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  const boxes = document.querySelectorAll('#grid div');
  boxes.forEach(box => {
    box.innerHTML = '';  // Remove the image from each cell
  });
}

document.querySelectorAll('#grid div').forEach(box => {
  box.addEventListener('click', changeToMark);
});

// Reset button event listener
document.getElementById('reset-btn').addEventListener('click', () => {
  resetBoard();
  xScore = 0;
  oScore = 0;
  document.getElementById('x-score').innerText = xScore;
  document.getElementById('o-score').innerText = oScore;
});
