interface TextProps {
  className?: string;
  children: React.ReactNode;
  fontSizeName?:
    | "text-smallest"
    | "text-smaller"
    | "text-default"
    | "text-medium"
    | "text-large"
    | "text-bigger"
    | "text-jumbo"
    | "text-biggest";
  textColorName?:
    | "text"
    | "primary"
    | "primary-dark"
    | "secondary"
    | "secondary-dark"
    | "tertiary"
    | "tertiary-dark"
    | "neutral-dark"
    | "neutral-white"
    | "neutral-gray-1"
    | "neutral-gray-2"
    | "neutral-gray-3"
    | "neutral-gray-4"
    | "neutral-gray-5"
    | "semantic-info"
    | "semantic-alert"
    | "semantic-danger"
    | "semantic-success"
    | "light-text"
    | "dark-text";
  fontWeight?: "font-text-regular" | "font-text-bold" | "font-text-semi-bold";
  lineHeightName?: "small" | "default" | "tall" | "taller" | "big" | "biggest";
  padding?: "none" | "small" | "medium" | "large";
  margin?: "none" | "small" | "medium" | "large";
  borderWidth?: "none" | "thin" | "medium" | "thick";
  borderColor?:
    | "transparent"
    | "primary"
    | "primary-dark"
    | "secondary"
    | "secondary-dark"
    | "tertiary"
    | "tertiary-dark"
    | "neutral-dark"
    | "neutral-white"
    | "neutral-gray-1"
    | "neutral-gray-2"
    | "neutral-gray-3"
    | "neutral-gray-4"
    | "neutral-gray-5"
    | "semantic-info"
    | "semantic-alert"
    | "semantic-danger"
    | "semantic-success"
    | "light-text"
    | "dark-text";
}

export default TextProps;
