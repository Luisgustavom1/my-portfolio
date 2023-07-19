import { styled } from "@/lib/stitches.config";

type Icons = "menu" | "chevronRight";

interface IconsProps {
  icon: Icons;
}

export const Icon = ({ icon }: IconsProps) => {
  return (
    <Container>
      <use href={`/icons.svg#${icon}`} />
    </Container>
  );
};

const Container = styled("svg", {
  color: "$primary100",
  height: 24,
  padding: "$1",
  width: 24,
});
