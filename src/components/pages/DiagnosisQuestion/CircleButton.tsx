import React from "react";
import { ReactComponent as CheckIcon } from "../../../icons/check.svg"; // 必要に応じてチェックアイコンをインポート

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
      ? { width: 45, height: 45 }
      : size === 2
        ? { width: 35, height: 35 }
        : size === 3
          ? { width: 28, height: 28 }
          : size === 4
            ? { width: 15, height: 15 }
            : size === 5
              ? { width: 25, height: 25 }
              : size === 6
                ? { width: 35, height: 35 }
                : { width: 45, height: 45 };

  const borderColor = size < 4 ? "#88619A" : size === 4 ? "#9A9EA5" : "#33A474";

  const circleClass = {
    borderRadius: "50%",
    boxShadow: "inset 0 1px rgba(81, 89, 106, 0.05)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: borderColor,
    backgroundColor: selected ? borderColor : "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div style={{ ...circleClass, ...sizeClass }} onClick={onClick}>
      {selected && <CheckIcon />}
    </div>
  );
};

export default CircleButton;
