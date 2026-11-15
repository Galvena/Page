import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        outline:
          "border bg-transparent text-foreground hover:bg-[var(--ink-a05)]",
        "sheet-outline":
          "border bg-transparent text-foreground hover:bg-[var(--ink-a05)]",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
        ghost: "hover:bg-[var(--ink-a05)]",
        link: "text-oxide-hi underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
        // the drawing-sheet CTA: mono caps on both lines
        sheet:
          "h-auto rounded-sm px-6 py-3.5 font-mono text-[13px] font-normal uppercase tracking-[0.09em]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
