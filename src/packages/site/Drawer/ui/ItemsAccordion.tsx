import { PropsWithChildren } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Button } from "@design-system/ui";
import { styled } from "@/lib/stitches.config";

interface ItemsAccordionProps {
  title: string;
}

export const ItemsAccordion = ({
  children,
  title,
}: PropsWithChildren<ItemsAccordionProps>) => {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <Accordion.Trigger asChild>
          <AccordionTitle>{title}</AccordionTitle>
        </Accordion.Trigger>
        <Accordion.Content>{children}</Accordion.Content>
      </AccordionItem>
    </Accordion.Root>
  );
};

const AccordionItem = styled(Accordion.Item, {
  padding: "2px 10px",
});

const AccordionTitle = styled(Button, {
  color: "$primary200",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: 1,
  padding: "2px $1",
  margin: "10px 0 6px",
});
