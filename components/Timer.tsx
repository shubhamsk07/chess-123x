    ```typescript
    import { useState, useEffect, useRef } from 'react';

    interface TimerProps {
      initialTime: number; // Time in seconds
      onTimeUp?: () => void;
    }

    const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
      const [timeLeft, setTimeLeft] = useState(initialTime);
      const intervalRef = useRef<NodeJS.Timer | null>(null);

      useEffect(() => {
        intervalRef.current = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(intervalRef.current!);
              if (onTimeUp) onTimeUp();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(intervalRef.current!);
      }, [initialTime, onTimeUp]);

      const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
      };

      return (
        <div>
          <span>{formatTime(timeLeft)}</span>
        </div>
      );
    };

    export default Timer;
    ```
  