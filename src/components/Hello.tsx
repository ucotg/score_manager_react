import { Button } from "@mui/material";

const Hello: React.FC = () => {
  const onClick = () => {
    alert("Hello");
  };
  const text = "Hello, React";

  return <Button onClick={onClick}>{text}</Button>;
};

export default Hello;
