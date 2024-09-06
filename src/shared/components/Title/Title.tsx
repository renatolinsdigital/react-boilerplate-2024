import "./Title.scss";
import classNames from "classnames";
import { TitleProps } from "./Title.model";

function Title({ tag: Tag = "h1", children, className = "" }: TitleProps) {
  const classes = classNames("title", className, Tag);

  return <Tag className={classes}>{children}</Tag>;
}

export default Title;
