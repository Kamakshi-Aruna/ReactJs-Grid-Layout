import React, { useEffect, useRef, useCallback } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "./GridLayout.css";
 
const GridLayout = () => {
  const gridContainerRef = useRef(null);
  const gridRef = useRef(null);
  const saveTimeoutRef = useRef(null);
 
  const saveLayout = useCallback(() => {
    if (gridRef.current) {
      const grid = gridRef.current;
      const currentItems = grid.engine.nodes.map((item) => ({
        content: item.content,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
      }));
 
      localStorage.setItem("gridItems", JSON.stringify(currentItems));
    }
  }, []);
 
  useEffect(() => {
    const initializeGridStack = () => {
      const gridContainer = gridContainerRef.current;
 
      if (gridContainer) {
        const grid = GridStack.init(
          {
            staticGrid: false,
            draggable: {
              handle: ".grid-stack-item-content",
            },
            column: 12,
          },
          gridContainer
        );
 
        gridRef.current = grid;
 
        const savedItems = localStorage.getItem("gridItems");
 
        if (savedItems) {
          const items = JSON.parse(savedItems);
          grid.removeAll();
          grid.load(items);
        } else {
          const defaultItems = [
            { content: "Box 1", x: 0, y: 0, w: 3, h: 2 },
            { content: "Box 2", x: 3, y: 0, w: 3, h: 2 },
            { content: "Box 3", x: 6, y: 0, w: 3, h: 2 },
            { content: "Box 4", x: 9, y: 0, w: 3, h: 2 },
            { content: "Box 5", x: 0, y: 2, w: 3, h: 2 },
            { content: "Box 6", x: 3, y: 2, w: 3, h: 2 },
            { content: "Box 7", x: 6, y: 2, w: 3, h: 2 },
            { content: "Box 8", x: 9, y: 2, w: 3, h: 2 },
          ];
 
          grid.removeAll();
          grid.load(defaultItems);
          grid.batchUpdate();
        }
 
        grid.on("change", () => {
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
          }
 
          saveTimeoutRef.current = setTimeout(() => {
            saveLayout();
          }, 500);
        });
 
        return () => {
          grid.destroy();
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
          }
        };
      }
    };
 
    const timeoutId = setTimeout(initializeGridStack, 100);
    return () => clearTimeout(timeoutId);
  }, [saveLayout]);
 
  return (
    <div className="grid-container">
      <div ref={gridContainerRef} className="grid-stack"></div>
    </div>
  );
};
 
export default GridLayout;