import { styled } from "@/lib/stitches.config";

export const Button = styled("button", {
  alignItems: "center",
  background: "none",
  border: "none",
  borderRadius: "$sm",
  cursor: "pointer",
  display: "flex",
  gap: "$2",
  justifyContent: "center",
  padding: "6px $2",
  transition: "$default",

  "&:hover": {
    backgroundColor: "$primary700",
  },

  "&:active": {
    backgroundColor: "$primary600",
  },
});
