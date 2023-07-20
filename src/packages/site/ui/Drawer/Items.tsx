import { Button, Icon } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";
import { ItemsAccordion } from "./ItemsAccordion";

export const Items = () => {
  return (
    <>
      <ItemsContainer border>
        <Item>
          <Icon size={14} icon="search" />
          <Text>Search</Text>
        </Item>
        <Item>
          <Icon size={14} icon="clock" />
          <Text>Updates</Text>
        </Item>
      </ItemsContainer>

      <ItemsContainer>
        <ItemsAccordion title="Social Media">
          <Item>
            <Icon size={14} icon="github" />
            <Text>Github</Text>
          </Item>
          <Item>
            <Icon size={14} icon="linkedin" />
            <Text>Linkedin</Text>
          </Item>
          <Item>
            <Icon size={14} icon="dev.to" />
            <Text>Dev.to</Text>
          </Item>
        </ItemsAccordion>
      </ItemsContainer>
    </>
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

const ItemsContainer = styled("section", {
  padding: "0 $1 $2",

  variants: {
    border: {
      true: {
        borderBottom: "1px solid rgba(15, 15, 15, 0.1)",
      },
    },
  },
});
