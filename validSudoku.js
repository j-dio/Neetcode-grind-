/* 
  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  Note:

  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
  Only the filled cells need to be validated according to the mentioned rules.

  @param {character[][]} board
  @return {boolean}

  Sol:
    1. Create three 2d boolean arrays (rows, cols, boxes)
    2. Iterate over each cell (i, j) in the board
      - if cell is empty '.', skip
      - if not, convert char digit into an index:
        num = board[i][j] - '1'
      - compute boxIndex = (i/3) * 3 + (j/3) => uniquely identifies each of the 9 sub-boxes
    3. Check if digit num is already present in: rows[i][num] || cols[j][num] || boxes[boxIndex][num]
      - if yes, return false
    4. Otherwise, if not present, mark digit as seen
      - rows[i][num] = cols[j][num] = boxes[boxIndex][num] = true
    5. Scan entire board. if no conflicts, return true
*/
var isValidSudoku = function (board) {
  // rows, columns, boxes are 2d arrays(9x9) where each cell is initialized to false
  const rows = Array.from({ length: 9 }, () => Array(9).fill(false))
  const columns = Array.from({ length: 9 }, () => Array(9).fill(false))
  const boxes = Array.from({ length: 9 }, () => Array(9).fill(false))

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        let num = board[r][c].charCodeAt(0) - '1'.charCodeAt(0)
        let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)

        if (rows[r][num] || columns[c][num] || boxes[boxIndex][num]) return false
        // digit is already present => return false

        // if not present, mark as seen
        rows[r][num] = columns[c][num] = boxes[boxIndex][num] = true
      }
    }
  }
  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '1', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board))
