"use client";

import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import { styled } from "@/lib/stitches.config";
import { Icon, IconButton } from "@design-system/ui";

export const Header = () => (
  <ToolbarRoot aria-label="Barra de navegação">
    <IconButton>
      <Icon icon="menu" />
    </IconButton>
  </ToolbarRoot>
);

const ToolbarRoot = styled(Toolbar.Root, {
  padding: "$3",
  width: "100%",
});
