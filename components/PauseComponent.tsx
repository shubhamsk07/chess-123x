    ```typescript
    import React, { useState } from 'react';

    interface PauseProps {
      isPaused: boolean;
      onPause: () => void;
      onResume: () => void;
    }

    const PauseComponent: React.FC<PauseProps> = ({ isPaused, onPause, onResume }) => {
      return (
        <div>
          {isPaused ? (
            <button onClick={onResume}>Resume</button>
          ) : (
            <button onClick={onPause}>Pause</button>
          )}
        </div>
      );
    };

    export default PauseComponent;
    ```
  