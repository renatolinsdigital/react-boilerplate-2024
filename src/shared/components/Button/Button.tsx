import "./Button.scss";
import ButtonProps from "./Button.model";

function Button({
  onClick,
  children,
  onMouseDown,
  isLoading = false,
}: ButtonProps) {
  const handleClick = () => {
    if (!isLoading) onClick?.();
  };

  const handleMouseDown = () => {
    onMouseDown?.();
  };

  return (
    <button
      className="button"
      disabled={isLoading}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
