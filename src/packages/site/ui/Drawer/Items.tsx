import { Description } from "@radix-ui/react-dialog";
import { Button, Icon } from "@design-system/ui";

export const Items = () => {
  return (
    <Description>
      <Button>
        <Icon icon="search" />
        Search
      </Button>
    </Description>
  );
};
