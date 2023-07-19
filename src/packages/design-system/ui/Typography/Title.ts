import { styled } from "@/lib/stitches.config";
import { Typography } from "@design-system/shared/types";

const Large = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 400,
  fontSize: "22px",
  lineHeight: "28px",
  letterSpacing: 0,
});

const Medium = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
});

const Small = styled("p", {
  fontFamilyName: "Inconsolata",
  fontFamilyStyle: "Regular",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.10px",
});

export const Title: Record<Typography, ReturnType<typeof styled>> = {
  large: Large,
  medium: Medium,
  small: Small,
};
