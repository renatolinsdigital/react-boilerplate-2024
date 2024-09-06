import "./Title.scss";
import { TitleProps } from "./Title.model";

function Title({ text, tag: Tag = "h1" }: TitleProps) {
  return <Tag className={`title heading-${Tag}`}>{text}</Tag>;
}

export default Title;
