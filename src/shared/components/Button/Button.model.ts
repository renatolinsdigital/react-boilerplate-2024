interface ButtonProps {
  isLoading?: boolean;
  onClick?: () => void;
  onMouseDown?: () => void;
  children: React.ReactNode;
}

export default ButtonProps;
