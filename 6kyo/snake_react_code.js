import React, { useState, useEffect } from 'react';

const CELL_SIZE = 20;
const BOARD_SIZE = 20;
const APPLE_COUNT_THRESHOLD = 5;
const MINE_INTERVAL = 30;
const MINE_MAX_COUNT = 5;

function Board() {
  const [snakePosition, setSnakePosition] = useState([[0, 0]]);
  const [applePosition, setApplePosition] = useState([0, 0]);
  const [minePositions, setMinePositions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [direction, setDirection] = useState([0, 1]);
  const [appleCount, setAppleCount] = useState(0);
  const [mineIntervalId, setMineIntervalId] = useState(null);

  useEffect(() => {
    // Set up an interval to update the snake's position at regular intervals
    const intervalId = setInterval(() => {
      // Shift the position of each segment of the snake forward by one
      const newSnakePosition = snakePosition.map(([x, y], i) => {
        if (i === 0) {
          // Update the position of the head of the snake
          x += direction[0];
          y += direction[1];

          // Check for collisions with the edges of the board or mines
          if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE || minePositions.some(([mineX, mineY]) => mineX === x && mineY === y)) {
            setGameOver(true);
            return [x, y];
          }
        } else {
          // Update the position of the rest of the snake
          [x, y] = snakePosition[i - 1];
        }
        return [x, y];
      });

      // Check for collisions with the apple
      const [headX, headY] = newSnakePosition[0];
      const [appleX, appleY] = applePosition;
      if (headX === appleX && headY === appleY) {
        // Increase the score and add a new segment to the snake
        setScore(score + 1);
        setAppleCount(appleCount + 1);
        setSnakePosition([...newSnakePosition, snakePosition[snakePosition.length - 1]]);

        // Check if we need to change the position of the apple or add a new mine
        if (appleCount === APPLE_COUNT_THRESHOLD) {
          setApplePosition(getRandomPosition());
          setAppleCount(0);
        }
      } else {
        setSnakePosition(newSnakePosition);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [snakePosition, applePosition, minePositions, score, gameOver, speed, direction, appleCount]);

  useEffect(() => {
    // Set up a listener for keyboard events
    function handleKeyDown(event) {
      // Update the direction of the snake based on the arrow key pressed
      switch (event.key) {
        case 'ArrowUp':
          setDirection([0, -1]);
          break;
        case 'ArrowDown':
          setDirection([0, 1]);
          break;
        case 'ArrowLeft':
          setDirection([-1, 0]);
          break;
        case 'ArrowRight':
          setDirection([1, 0]);
          break;
        default:
          break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    // Set up an interval to add mines to the board at regular intervals
    const intervalId = setInterval(() => {
      if (minePositions.length < MINE_MAX_COUNT) {
        setMinePositions([...minePositions, getRandomPosition()]);
      }
    }, MINE_INTERVAL * 1000);

    setMineIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, [minePositions]);

  // Get a random position on the board
  function getRandomPosition() {
    return [Math.floor(Math.random() * BOARD_SIZE), Math.floor(Math.random() * BOARD_SIZE)];
  }

  // Render the game board
  return (
    <div>
      {gameOver ? (
        <div>Game Over! Your score was {score}.</div>
      ) : (
        <>
          <div>Score: {score}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: `${BOARD_SIZE * CELL_SIZE}px` }}>
            {snakePosition.map(([x, y]) => (
              <div key={`${x},${y}`} style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`, backgroundColor: 'black' }} />
            ))}
            <div style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`, backgroundColor: 'red' }} />
            {minePositions.map(([x, y]) => (
              <div key={`${x},${y}`} style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`, backgroundColor: 'gray' }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
