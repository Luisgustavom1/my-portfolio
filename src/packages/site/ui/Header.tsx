"use client";

import { styled } from "@/lib/stitches.config";
import * as Toolbar from "@radix-ui/react-toolbar";
import { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren<unknown>) => {
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
