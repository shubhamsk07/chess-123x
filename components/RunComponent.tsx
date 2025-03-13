    ```typescript
    import React, { useState } from 'react';
    import Chess from 'chess.js';

    interface RunProps {
      onMove: (move: string) => void;
    }

    const RunComponent: React.FC<RunProps> = ({ onMove }) => {
      const [game, setGame] = useState(new Chess());
      const [moveInput, setMoveInput] = useState('');


      const handleMove = () => {
        if (game.move(moveInput)) {
          onMove(moveInput);
          setMoveInput('');
        } else {
          alert('Invalid move');
        }
      };

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMoveInput(event.target.value);
      };


      return (
        <div>
          <input type="text" value={moveInput} onChange={handleInputChange} />
          <button onClick={handleMove}>Make Move</button>
        </div>
      );
    };

    export default RunComponent;
    ```
  