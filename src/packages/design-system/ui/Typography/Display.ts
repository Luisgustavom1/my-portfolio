import { styled } from "@/lib/stitches.config";
import { Typography } from "@design-system/shared/types";

const Large = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "57px",
  lineHeight: "64px",
  letterSpacing: "-0.25px",
});

const Medium = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "45px",
  lineHeight: "52px",
  letterSpacing: 0,
});

const Small = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "44px",
  letterSpacing: 0,
});

export const Display: Record<Typography, ReturnType<typeof styled>> = {
  large: Large,
  medium: Medium,
  small: Small,
};
