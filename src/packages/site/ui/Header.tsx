"use client";

import { PropsWithChildren } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import { styled } from "@/lib/stitches.config";

interface HeaderProps {}

export const Header = ({ children }: PropsWithChildren<HeaderProps>) => {
  return (
    <ToolbarRoot as="header" aria-label="Barra de navegação">
      {children}

      <p>Header</p>
    </ToolbarRoot>
  );
};

const ToolbarRoot = styled(Toolbar.Root, {
  alignItems: "center",
  display: "flex",
  gap: "$3",
  padding: "$3",
  width: "100%",
});
