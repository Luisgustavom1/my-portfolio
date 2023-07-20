import { styled } from "@/lib/stitches.config";

type Icons =
  | "menu"
  | "chevronRight"
  | "chevronLeft"
  | "search"
  | "clock"
  | "largeClock"
  | "github"
  | "linkedin"
  | "dev.to";

interface IconsProps {
  color?: string;
  icon: Icons;
  size?: number;
}

export const Icon = ({
  color = "$primary300",
  icon,
  size = 24,
}: IconsProps) => {
  return (
    <Container
      css={{ color, width: size, height: size }}
      width={size}
      height={size}
    >
      <use href={`/icons.svg#${icon}`} />
    </Container>
  );
};

const Container = styled("svg", {
  margin: "$1",
});
