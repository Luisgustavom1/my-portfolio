import { ComponentPropsWithoutRef } from "react";
import { Trigger as DialogTrigger } from "@radix-ui/react-dialog";
import { Icon, IconButton, Icons } from "@/packages/design-system/ui";

interface OpenDrawerButton extends ComponentPropsWithoutRef<"button"> {
  icon: Icons;
}

export const OpenDrawerButton = ({ icon, ...rest }: OpenDrawerButton) => {
  return (
    <DialogTrigger asChild>
      <IconButton {...rest}>
        <Icon size={16} icon={icon} />
      </IconButton>
    </DialogTrigger>
  );
};
