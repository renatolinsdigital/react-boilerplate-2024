interface ButtonProps {
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  onMouseDown?: () => void;
  children: React.ReactNode;

  coloring?:
    | "coloring-default"
    | "coloring-primary"
    | "coloring-secondary"
    | "coloring-tertiary";
}

export default ButtonProps;
