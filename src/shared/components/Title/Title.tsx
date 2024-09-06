import "./Title.scss";
import { TitleProps } from "./Title.model";

function Title({ text, level = "1" }: TitleProps) {
  return (
    <>
      {level === "1" && <h1 className={`title heading-${level}`}>{text}</h1>}
      {level === "2" && <h2 className={`title heading-${level}`}>{text}</h2>}
      {level === "3" && <h3 className={`title heading-${level}`}>{text}</h3>}
      {level === "4" && <h4 className={`title heading-${level}`}>{text}</h4>}
      {level === "5" && <h5 className={`title heading-${level}`}>{text}</h5>}
      {level === "6" && <h6 className={`title heading-${level}`}>{text}</h6>}
    </>
  );
}

export default Title;
