import React from "react";
import CheckIcon from "@mui/icons-material/Check";

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

  //const selectedClass = selected ? "selected" : "";
  const circleClass = {
    borderRadius: "50%",
    boxShadow: "inset 0 1px rgba(81, 89, 106, 0.05)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: size < 4 ? "#88619A" : size === 4 ? "#9A9EA5" : "#33A474",
    backgroundColor: "#f9f9f9",
    "&.selected": {
      backgroundColor: "#4CAF50",
      color: "white",
    },
  };

  return (
    <div style={{ ...circleClass, ...sizeClass }} onClick={onClick}>
      {selected && <CheckIcon style={{ color: "black" }} />}
    </div>
  );
};
