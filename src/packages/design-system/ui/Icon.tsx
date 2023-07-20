import { styled } from "@/lib/stitches.config";

type Icons = "menu" | "chevronRight" | "chevronLeft" | "search";

interface IconsProps {
  color?: string;
  icon: Icons;
  size?: "sm" | "md" | "lg";
}

export const Icon = ({ color, icon, size }: IconsProps) => {
  return (
    <Container color={color} size={size}>
      <use href={`/icons.svg#${icon}`} />
    </Container>
  );
};

const Container = styled("svg", {
  color: "$primary300",
  padding: "$1",

  variants: {
    size: {
      sm: {
        height: 20,
        width: 20,
      },
      md: {
        height: 24,
        width: 24,
      },
      lg: {
        height: 32,
        width: 32,
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
