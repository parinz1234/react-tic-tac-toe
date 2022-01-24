import {useState} from 'react'
import Square from './Square'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], // index of array
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState(null)
  
  const handleClick = (i) => {
    if (winner) { return }
    const squaresCopy = [...squares]
    if (squaresCopy[i]) { return }
    squaresCopy[i] = xIsNext ? 'X' : 'O'
    setSquares(squaresCopy)
    const w = calculateWinner(squaresCopy);
    if (w) { setWinner(w) }
    setXIsNext(!xIsNext)
  }

  return <div>
    {
      winner ?
      <div>Winner is :{ winner }</div>
      :
      <div>Next player: { xIsNext ? 'X' : 'Y' }</div>
    }
    <div>
      <div style={{display: 'flex', width: '300px', flexWrap: 'wrap'}}>
      {
        squares.map((value, index) => <Square key={index} value={value} onClick={() => handleClick(index)} />)
      }
    </div>
    </div>
  </div>
}


export default Board