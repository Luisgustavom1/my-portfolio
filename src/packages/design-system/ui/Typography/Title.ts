import { styled } from "@/lib/stitches.config";

const Small = styled("p", {
  fontWeight: 500,
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const Title = {
  small: Small,
};
