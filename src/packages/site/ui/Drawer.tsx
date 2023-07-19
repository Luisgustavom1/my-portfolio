"use client";

import { PropsWithChildren, useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Icon, IconButton, Title } from "@design-system/ui";
import MyAvatar from "@site/shared/assets/my-avatar.webp";
import { styled } from "@/lib/stitches.config";
import { Flex } from "./Flex";
import { Header } from "./Header";

interface DrawerProps {}

type DrawerState = "closed" | "clicked" | "hovered";

const animationDuration = 250;

const Drawer = ({ children }: PropsWithChildren<DrawerProps>) => {
  const [drawerState, setDrawerState] = useState<DrawerState>("closed");
  const portalRef = useRef(null);

  const isOpen = drawerState !== "closed";
  const isClicked = drawerState === "clicked";
  const isHovered = drawerState === "hovered";

  const close = () => setDrawerState("closed");

  return (
    <Flex
      onMouseLeave={() => {
        if (isHovered) close();
      }}
    >
      <Dialog.Root open={isOpen}>
        <DialogContent as="aside" size={drawerState} ref={portalRef}>
          <HeaderDrawer as="header">
            <Avatar>
              <Image alt="avatar" width={20} height={20} src={MyAvatar} />
            </Avatar>

            <Dialog.Title>
              <Title.small>Luisao&#39;s Notion</Title.small>
            </Dialog.Title>

            {isClicked && (
              <DialogClose asChild onClick={() => setDrawerState("hovered")}>
                <IconButton>
                  <Icon icon="chevronLeft" />
                </IconButton>
              </DialogClose>
            )}
          </HeaderDrawer>

          <Dialog.Description>Testing</Dialog.Description>
        </DialogContent>

        <Container>
          <AreaToHovered
            onMouseOver={() => {
              if (!isClicked) setDrawerState("hovered");
            }}
          >
            <Header>
              {!isClicked && (
                <Dialog.Trigger asChild>
                  <IconButton onClick={() => setDrawerState("clicked")}>
                    <Icon icon={isHovered ? "chevronRight" : "menu"} />
                  </IconButton>
                </Dialog.Trigger>
              )}
            </Header>

            {children}
          </AreaToHovered>
        </Container>
      </Dialog.Root>
    </Flex>
  );
};

const HeaderDrawer = styled(Flex, {
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

const DialogContent = styled(Dialog.Content, {
  transition: `all ${animationDuration}ms ease-in`,
  transform: "translateX(0)",
  top: 60,
  position: "absolute",
  width: 240,
  zIndex: 999,

  "&:focus": {
    outline: "none",
  },

  variants: {
    size: {
      clicked: {
        backgroundColor: "$white100",
        height: "100vh",
        top: 0,
        position: "relative",
      },
      hovered: {
        background: "$white700",
        borderRadius: "$sm",
        boxShadow:
          "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px",
      },
      closed: {
        width: 0,
        transform: "translateX(-240px)",
      },
    },
  },

  defaultVariants: {
    size: "closed",
  },
});

const DialogClose = styled(Dialog.Close, {
  marginLeft: "auto",
  opacity: 0,
  transition: "$default",

  "&:hover": {
    opacity: 1,
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  transition: `margin ${animationDuration}ms ease-in`,
});

const AreaToHovered = styled("div", {
  background: "transparent",
  height: "100vh",
  width: 120,
  position: "absolute",
  zIndex: 1,
});

export { Drawer };
