import { styled } from "@/lib/stitches.config";

const Small = styled("p", {
  color: "$primary",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: 1.2,
  whiteSpace: "nowrap",
});

export const Title = {
  small: Small,
};
