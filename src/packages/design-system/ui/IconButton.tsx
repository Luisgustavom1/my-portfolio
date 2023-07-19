import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { styled } from "@/lib/stitches.config";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  children,
  ...rest
}: PropsWithChildren<IconButtonProps>) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled("button", {
  alignItems: "center",
  background: "none",
  border: "none",
  borderRadius: "$sm",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "$primary700",
  },

  "&:active": {
    backgroundColor: "$primary600",
  },
});
