import { styled } from "@/lib/stitches.config";
import { Typography } from "@design-system/shared/types";

const Large = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "40px",
  letterSpacing: 0,
});

const Medium = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "36px",
  letterSpacing: 0,
});

const Small = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "32px",
  letterSpacing: 0,
});

export const Headline: Record<Typography, ReturnType<typeof styled>> = {
  large: Large,
  medium: Medium,
  small: Small,
};
