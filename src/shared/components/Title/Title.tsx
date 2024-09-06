import "./Title.scss";
import classNames from "classnames";
import { TitleProps } from "./Title.model";

function Title({ text, tag: Tag = "h1", className = "" }: TitleProps) {
  const classes = classNames("title", className, Tag);

  return <Tag className={classes}>{text}</Tag>;
}

export default Title;
