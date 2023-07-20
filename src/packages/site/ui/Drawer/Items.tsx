import { Button, Icon } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";

export const Items = () => {
  return (
    <Container>
      <Item>
        <Icon size={14} icon="search" />
        <Text>Search</Text>
      </Item>
      <Item>
        <Icon size={14} icon="clock" />
        <Text>Updates</Text>
      </Item>
    </Container>
  );
};

const Item = styled(Button, {
  alignItems: "center",
  display: "flex",
  gap: "$2",
  justifyContent: "flex-start",
  margin: "1px 0",
  padding: "2px 10px",
  width: "100%",
});

const Text = styled("p", {
  color: "$primary200",
  fontSize: 14,
  lineHeight: "21px",
});

const Container = styled("section", {
  borderBottom: "1px solid rgba(15, 15, 15, 0.1)",
  padding: "0 $1 $2",
});
