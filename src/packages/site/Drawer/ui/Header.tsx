import {
  Title as DialogTitle,
  Close as DialogClose,
} from "@radix-ui/react-dialog";
import { IconButton, Icon, Title, Flex } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";

interface HeaderProps {
  showCloseButton: boolean;
  onClose: () => void;
}

export const Header = ({ showCloseButton, onClose }: HeaderProps) => {
  return (
    <DrawerHeader as="header">
      <Avatar>
        <img alt="avatar" width={20} height={20} src="/assets/my-avatar.webp" />
      </Avatar>

      <DialogTitle>
        <Title.small>Luisao&#39;s Notion</Title.small>
      </DialogTitle>

      {showCloseButton && (
        <DrawerClose asChild onClick={onClose}>
          <IconButton className="close-drawer">
            <Icon size={16} icon="chevronLeft" />
          </IconButton>
        </DrawerClose>
      )}
    </DrawerHeader>
  );
};

const DrawerHeader = styled(Flex, {
  alignItems: "center",
  padding: "$3",

  "&:hover": {
    backgroundColor: "$primary700",
    transition: "$default",
  },

  "& > *:first-child": {
    marginRight: "$2",
  },
});

const Avatar = styled("div", {
  borderRadius: "$sm",
  height: "20px",
  overflow: "hidden",
  width: "20px",
});

const DrawerClose = styled(DialogClose, {
  marginLeft: "auto",
  opacity: 0,
  transition: "opacity 200ms ease-in-out",
});
