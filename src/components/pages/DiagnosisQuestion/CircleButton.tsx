import React from "react";

interface CircleButtonProps {
  size: number;
  selected: boolean;
  onClick: () => void;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  size,
  selected,
  onClick,
}) => {
  const sizeClass =
    size === 1
      ? { width: 30, height: 30 }
      : size === 2
        ? { width: 25, height: 25 }
        : size === 3
          ? { width: 20, height: 20 }
          : size === 4
            ? { width: 15, height: 15 }
            : size === 5
              ? { width: 20, height: 20 }
              : size === 6
                ? { width: 25, height: 25 }
                : { width: 30, height: 30 };

  const selectedClass = selected ? "selected" : "";
  const circleClass = {
    borderRadius: "50%",
    margin: "0 8px",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: size < 4 ? "#ff7fbf" : size === 4 ? "#d4d9df" : "#ffbf7f",
    backgroundColor: "white",
    "&.selected": {
      backgroundColor: "#4CAF50",
      color: "white",
    },
  };

  return <div style={{ ...circleClass, ...sizeClass }} onClick={onClick}></div>;
};
