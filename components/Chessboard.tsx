    import { useState } from 'react';

    interface ChessboardProps {
      board: string[][];
      onMove: (from: string, to: string) => void;
    }

    const Chessboard = ({ board, onMove }: ChessboardProps) => {
      const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
      const [selectedSquare, setSelectedSquare] = useState<{ row: number; col: number } | null>(null);

      const handleSquareClick = (row: number, col: number) => {
        const piece = board[row][col];
        if (selectedPiece === null) {
          if (piece !== ' ') {
            setSelectedPiece(piece);
            setSelectedSquare({ row, col });
          }
        } else {
          onMove(
            `${selectedSquare?.col}${selectedSquare?.row}`,
            `${col}${row}`
          );
          setSelectedPiece(null);
          setSelectedSquare(null);
        }
      };

      return (
        <div className="chessboard">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((piece, colIndex) => (
                <div
                  key={colIndex}
                  className={`square ${
                    (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black'
                  } ${selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex ? 'selected' : ''}`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                >
                  {piece}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };

    export default Chessboard;
  