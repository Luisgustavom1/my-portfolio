import { styled } from "@/lib/stitches.config";
import { PropsWithChildren } from "react";

interface IconButtonProps {}

export const IconButton = ({
  children,
}: PropsWithChildren<IconButtonProps>) => {
  return <Container>{children}</Container>;
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
