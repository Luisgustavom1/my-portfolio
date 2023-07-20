import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { styled } from "@/lib/stitches.config";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  size?: "fit" | "full";
}

export const Button = ({
  children,
  startIcon,
  endIcon,
  ...rest
}: PropsWithChildren<Button>) => {
  return (
    <Container {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Container>
  );
};

const Container = styled("button", {
  alignItems: "center",
  background: "none",
  border: "none",
  borderRadius: "$sm",
  cursor: "pointer",
  display: "flex",
  gap: "$2",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "$primary700",
  },

  "&:active": {
    backgroundColor: "$primary600",
  },

  variants: {
    size: {
      fit: {
        width: "fit-content",
      },
      full: {
        width: "100%",
      },
    },
  },

  defaultVariants: {
    size: "fit",
  },
});
