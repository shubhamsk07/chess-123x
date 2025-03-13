    import { useState } from 'react';
    import Chessboard from 'chessboardjsx';
    import Chess from 'chess.js';

    export default function Home() {
      const [game, setGame] = useState(new Chess());
      const [fen, setFen] = useState(game.fen());

      const onDrop = ({ sourceSquare, targetSquare, piece }) => {
        const move = game.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q' // Promote to queen by default
        });

        if (move) {
          setGame({...game});
          setFen(game.fen());
        }
      };

      return (
        <div>
          <Chessboard
            position={fen}
            onDrop={onDrop}
            width={300}
            lightSquareStyle={{backgroundColor: '#f0d9b5'}}
            darkSquareStyle={{backgroundColor: '#b58863'}}
          />
        </div>
      );
    }
  