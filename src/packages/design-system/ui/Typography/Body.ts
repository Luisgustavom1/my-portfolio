import { styled } from "@/lib/stitches.config";
import { Typography } from "@design-system/shared/types";

const Large = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
});

const Medium = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
});

const Small = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
});

export const Body: Record<Typography, ReturnType<typeof styled>> = {
  large: Large,
  medium: Medium,
  small: Small,
};
