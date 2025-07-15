"use client";

import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import VanillaWrapper from "../vanillaWrapper";

const accordionVariants = cva("border rounded-lg", {
  variants: {
    variant: {
      default: "border-gray-200 bg-white",
      filled: "border-gray-300 bg-gray-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const itemVariants = cva("border-b last:border-b-0", {
  variants: {
    variant: {
      default: "border-gray-200",
      filled: "border-gray-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const triggerVariants = cva(
  "flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-gray-50 [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "text-gray-900",
        filled: "text-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const contentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "text-gray-600",
        filled: "text-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  items: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  className?: string;
}

const Accordion = ({ items, variant, className }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn(accordionVariants({ variant, className }))}>
      {items.map((item) => (
        <div key={item.id} className={cn(itemVariants({ variant }))}>
          <button
            className={cn(triggerVariants({ variant }))}
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItems.has(item.id)}
          >
            {item.title}
            <svg
              className="h-4 w-4 shrink-0 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </button>
          <div
            className={cn(contentVariants({ variant }), "px-6 pb-4")}
            data-state={openItems.has(item.id) ? "open" : "closed"}
            style={{
              maxHeight: openItems.has(item.id) ? "200px" : "0px",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// Vanilla JS version
const createAccordion = (wrapper: HTMLDivElement) => {
  const items = [
    {
      id: "1",
      title: "아코디언 항목 1",
      content: "이것은 첫 번째 아코디언 항목의 내용입니다.",
    },
    {
      id: "2",
      title: "아코디언 항목 2",
      content: "이것은 두 번째 아코디언 항목의 내용입니다.",
    },
    {
      id: "3",
      title: "아코디언 항목 3",
      content: "이것은 세 번째 아코디언 항목의 내용입니다.",
    },
  ];

  const accordion = document.createElement("div");
  accordion.className = "border border-gray-200 rounded-lg bg-white";

  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `border-b ${
      index === items.length - 1 ? "" : "border-gray-200"
    }`;

    const trigger = document.createElement("button");
    trigger.className =
      "flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-gray-50";
    trigger.textContent = item.title;

    const content = document.createElement("div");
    content.className = "overflow-hidden text-sm text-gray-600 px-6 pb-4";
    content.style.maxHeight = "0px";
    content.style.transition = "max-height 0.2s ease-out";
    content.textContent = item.content;

    let isOpen = false;
    trigger.addEventListener("click", () => {
      isOpen = !isOpen;
      content.style.maxHeight = isOpen ? "200px" : "0px";
      trigger.classList.toggle("bg-gray-50");
    });

    itemDiv.appendChild(trigger);
    itemDiv.appendChild(content);
    accordion.appendChild(itemDiv);
  });

  wrapper.appendChild(accordion);
};

const AccordionExample = () => {
  const items = [
    {
      id: "1",
      title: "아코디언 항목 1",
      content: "이것은 첫 번째 아코디언 항목의 내용입니다.",
    },
    {
      id: "2",
      title: "아코디언 항목 2",
      content: "이것은 두 번째 아코디언 항목의 내용입니다.",
    },
    {
      id: "3",
      title: "아코디언 항목 3",
      content: "이것은 세 번째 아코디언 항목의 내용입니다.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">React + CVA 버전</h2>
        <Accordion items={items} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Vanilla JS 버전</h2>
        <VanillaWrapper
          title="아코디언"
          subTitle="기본"
          initiator={createAccordion}
          variant="demo"
        />
      </div>
    </div>
  );
};

export default AccordionExample;
