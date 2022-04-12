import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

import "./styles.scss";

const Box = () => {
  const meutema = useContext(ThemeContext);

  return <div className={`box ${meutema}`} />;
};

export default Box;
