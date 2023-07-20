"use client";

import { PropsWithChildren } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import { Button, Icon, IconButton, Title, Flex } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";

interface TopBarProps {}

export const TopBar = ({ children }: PropsWithChildren<TopBarProps>) => {
  return (
    <Toolbar.Root asChild aria-label="Barra de navegação">
      <ToolbarRoot>
        {children}

        <Title.small>Articles</Title.small>

        <ToolbarItemsGroup>
          <ToolbarSeparator />

          <Button>
            <Title.small>Share</Title.small>
          </Button>

          <IconButton>
            <Icon size={20} color="$primary100" icon="largeClock" />
          </IconButton>
        </ToolbarItemsGroup>
      </ToolbarRoot>
    </Toolbar.Root>
  );
};

const ToolbarRoot = styled("header", {
  alignItems: "center",
  display: "flex",
  gap: "$3",
  paddingLeft: "$3",
  width: "100%",
});

const ToolbarItemsGroup = styled(Flex, {
  alignItems: "center",
  flex: 1,
  gap: "$1",
  justifyContent: "flex-end",
  padding: "$3",
});

const ToolbarSeparator = styled(Toolbar.Separator, {
  width: 1,
  backgroundColor: "$primary600",
  height: 20,
});
