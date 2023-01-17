const WIDTH = 800;
const HEIGHT = 600;
const APPLE_FREQUENCY = 30000; // 10 seconds
const MINE_FREQUENCY = 30000; // 30 seconds
const SPEED_INCREASE = 1.25;

// Set up canvas
const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');

// Set up initial snake position and velocity
let snakeX = WIDTH / 2;
let snakeY = HEIGHT / 2;
let snakeVelocityX = 1;
let snakeVelocityY = 0;

// Set up snake body segments
const snake = [{ x: snakeX, y: snakeY }];

// Set up initial apple position
let appleX = Math.floor(Math.random() * WIDTH);
let appleY = Math.floor(Math.random() * HEIGHT);

// Set up initial mine positions
let mines = [];

// Set up score
let score = 0;

// Set up game over flag
let gameOver = false;

// Set up key press states
const keysPressed = {
  left: false,
  right: false,
  up: false,
  down: false,
};

// Handle key down events
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    keysPressed.left = true;
  } else if (event.key === 'ArrowRight') {
    keysPressed.right = true;
  } else if (event.key === 'ArrowUp') {
    keysPressed.up = true;
  } else if (event.key === 'ArrowDown') {
    keysPressed.down = true;
  }
});

// Handle key up events
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') {
    keysPressed.left = false;
  } else if (event.key === 'ArrowRight') {
    keysPressed.right = false;
  } else if (event.key === 'ArrowUp') {
    keysPressed.up = false;
  } else if (event.key === 'ArrowDown') {
    keysPressed.down = false;
  }
});

// Update snake position based on velocity
function updateSnakePosition() {
  snakeX += snakeVelocityX;
  snakeY += snakeVelocityY;

  // Check for game over
  if (snakeX < 0 || snakeX >= WIDTH || snakeY < 0 || snakeY >= HEIGHT) {
    gameOver = true;
  }

  // Check for collision with mines
  for (const mine of mines) {
    if (mine.x === snakeX && mine.y === snakeY) {
      gameOver = true;
    }
  }

  // Check for collision with self
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snakeX && snake[i].y === snakeY) {
      gameOver = true;
    }
  }
}

// Update snake velocity based on key
function updateSnakeVelocity() {
  if (keysPressed.left) {
    snakeVelocityX = -1;
    snakeVelocityY = 0;
  } else if (keysPressed.right) {
    snakeVelocityX = 1;
    snakeVelocityY = 0;
  } else if (keysPressed.up) {
    snakeVelocityX = 0;
    snakeVelocityY = -1;
  } else if (keysPressed.down) {
    snakeVelocityX = 0;
    snakeVelocityY = 1;
  }
}

// Check if snake is at the same position as the apple and update score if so
function checkAppleCollision() {
  if (snakeX === appleX && snakeY === appleY) {
    // Increase score and move apple to a new random position
    score += 1;
    appleX = Math.floor(Math.random() * WIDTH);
    appleY = Math.floor(Math.random() * HEIGHT);

    // Increase snake speed if necessary
    if (score % 5 === 0) {
      snakeVelocityX *= SPEED_INCREASE;
      snakeVelocityY *= SPEED_INCREASE;
    }
  }
}

// Set up interval for updating apple position and adding new mines
setInterval(() => {
  // Update apple position
  appleX = Math.floor(Math.random() * WIDTH);
  appleY = Math.floor(Math.random() * HEIGHT);

  // Add new mine if necessary
  if (mines.length < score / 5) {
    mines.push({
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT),
    });
  }
}, APPLE_FREQUENCY);

document.body.appendChild(canvas);

// Set up interval for updating game state
setInterval(() => {
  if (gameOver) {
    return;
  }

  // Update snake velocity
  updateSnakeVelocity();

  // Update snake position
  updateSnakePosition();

  // Check for apple collision
  checkAppleCollision();

  // Clear canvas
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // Draw snake
  ctx.fillStyle = 'green';
  ctx.fillRect(snakeX, snakeY, 10, 10);

  // Draw apple
  ctx.fillStyle = 'red';
  ctx.fillRect(appleX, appleY, 10, 10);

  // Draw mines
  ctx.fillStyle = 'black';
  for (const mine of mines) {
    ctx.fillRect(mine.x, mine.y, 10, 10);
  }

  // Draw score
  ctx.fillStyle = 'white';
  ctx.font = '24px sans-serif';
  ctx.fillText(`Score: ${score}`, 10, 30);
}, 1000 / 30); // 30 FPS
