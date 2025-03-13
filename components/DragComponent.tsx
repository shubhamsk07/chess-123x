    ```typescript
    import React, { useState, useRef, useCallback } from 'react';

    interface DragComponentProps {
      children: React.ReactNode;
      onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
      onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
    }

    const DragComponent: React.FC<DragComponentProps> = ({ children, onDragStart, onDragEnd }) => {
      const ref = useRef<HTMLDivElement>(null);

      const handleDragStart = useCallback((event: React.DragEvent<HTMLDivElement>) => {
          if (ref.current) {
              onDragStart(event);
          }
      }, [onDragStart]);
      const handleDragEnd = useCallback((event: React.DragEvent<HTMLDivElement>) => {
          if (ref.current) {
              onDragEnd(event);
          }
      }, [onDragEnd]);


      return (
        <div ref={ref} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          {children}
        </div>
      );
    };

    export default DragComponent;
    ```
  