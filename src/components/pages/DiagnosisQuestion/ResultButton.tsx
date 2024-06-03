import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  responses: (number | null)[];
};

export const ResultButton: React.FC<Props> = ({ responses }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result", { state: { responses } });
  };

  return <Button onClick={handleClick}>Go to Result</Button>;
};
