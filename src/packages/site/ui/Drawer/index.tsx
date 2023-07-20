"use client";

import { MouseEvent, PropsWithChildren, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Icon, IconButton } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";
import { Flex } from "../Flex";
import { Header } from "../Header";
import { Header as DrawerHeader } from "./Header";
import { Items } from "./Items";

interface DrawerProps {}

type DrawerState = "closed" | "clicked" | "suspended";

const WIDTH_TO_OPEN_SUSPENDED_DRAWER = 120;
const ANIMATION_DURATION = 250;

const Drawer = ({ children }: PropsWithChildren<DrawerProps>) => {
  const [drawerState, setDrawerState] = useState<DrawerState>("closed");

  const isOpen = drawerState !== "closed";
  const isClicked = drawerState === "clicked";
  const isSuspended = drawerState === "suspended";

  const close = () => setDrawerState("closed");

  const openSmallDrawer = (e: MouseEvent<HTMLDivElement>) => {
    if (e.clientX <= WIDTH_TO_OPEN_SUSPENDED_DRAWER) {
      if (!isClicked) setDrawerState("suspended");
      return;
    }

    if (isSuspended) close();
  };

  return (
    <Wrapper onMouseMove={openSmallDrawer}>
      <Dialog.Root open={isOpen}>
        <DialogContent as="aside" size={drawerState}>
          <DrawerHeader
            showCloseButton={isClicked}
            onClose={() => setDrawerState("suspended")}
          />

          <Items />
        </DialogContent>

        <Container>
          <Header>
            {!isClicked && (
              <Dialog.Trigger asChild>
                <IconButton onClick={() => setDrawerState("clicked")}>
                  <Icon
                    size={16}
                    icon={isSuspended ? "chevronRight" : "menu"}
                  />
                </IconButton>
              </Dialog.Trigger>
            )}
          </Header>

          {children}
        </Container>
      </Dialog.Root>
    </Wrapper>
  );
};

const Wrapper = styled(Flex, {
  height: "100%",
});

const DialogContent = styled(Dialog.Content, {
  transition: `all ${ANIMATION_DURATION}ms ease-in`,
  opacity: 1,
  position: "absolute",
  width: 240,
  zIndex: 999,

  "&:focus": {
    outline: "none",
  },

  "&:hover .close-drawer": {
    opacity: 1,
  },

  variants: {
    size: {
      clicked: {
        backgroundColor: "$white100",
        height: "100vh",
        position: "relative",
        transform: "translateX(0)",
      },
      suspended: {
        background: "$white700",
        borderRadius: "$sm",
        boxShadow:
          "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px",
        transform: "translateX(0) translateY(60px)",
      },
      closed: {
        opacity: 0,
        transform: "translateX(-240px) translateY(60px)",
        width: 0,
      },
    },
  },

  defaultVariants: {
    size: "closed",
  },
});

const Container = styled("div", {
  flex: 1,
});

export { Drawer };
