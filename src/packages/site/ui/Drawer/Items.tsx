import { Description } from "@radix-ui/react-dialog";
import { Button, Icon } from "@design-system/ui";

export const Items = () => {
  return (
    <Description>
      <Button
        className="close-drawer"
        size="full"
        startIcon={<Icon icon="search" />}
      >
        Search
      </Button>
    </Description>
  );
};
