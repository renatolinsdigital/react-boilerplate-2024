import "./Text.scss";
import TextProps from "./Text.model";
import classNames from "classnames";

function Text({
  children,
  margin = "none",
  className = "",
  padding = "none",
  borderWidth = "none",
  lineHeightName = "default",
  textColorName = "text",
  borderColor = "transparent",
  fontSizeName = "text-default",
  fontWeight = "font-text-regular",
}: TextProps) {
  const classes = classNames(
    margin,
    padding,
    className, // ok
    fontWeight, // ok
    borderWidth,
    borderColor,
    fontSizeName, // ok
    textColorName,
    lineHeightName
  );

  return <p className={classes}>{children}</p>;
}

export default Text;
