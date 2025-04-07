import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonNBVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    /* TODO: Agregar nuestras propias variantes de estilo para neo brutalism 
    
    
    */
    variants: {
      variant: {
        hero: "",
        default:
          "bg-nB-pink text-primary-foreground border-2 border-nB-shadow text-nB-black shadow-nB-shadow hover:shadow-[4px_4px_0px] hover:-translate-y-1 hover:-translate-x-1 transition will-change-auto ease-in-out active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px] ",
        destructive:
          "bg-destructive text-destructive-foreground border-2 border-nB-shadow hover:bg-destructive/90 hover:shadow-[4px_4px_0px] hover:-translate-y-1 hover:-translate-x-1 transition will-change-auto ease-in-out active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px] shadow-nB-shadow",
        outline:
          "border border-input bg-background hover:bg-background hover:text-accent-foreground hover:shadow-[4px_4px_0px] hover:-translate-y-1 hover:-translate-x-1 transition will-change-auto ease-in-out active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px] shadow-nB-shadow",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-nB-shadow hover:bg-secondary/80 dark:hover:bg-secondary hover:shadow-[4px_4px_0px] hover:-translate-y-1 hover:-translate-x-1 transition will-change-auto ease-in-out active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px] shadow-nB-shadow",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:border hover:border-shadow",
        link: "text-primary underline-offset-4 hover:underline",
        linkNav:
          "bg-transparent capitalize font-medium border-2 border-transparent text-base xl:text-lg hover:bg-transparent hover:border-2 dark:hover:border-nB-white hover:border-nB-black active:bg-nB-white active:text-nB-black rounded-4xl px-2 py-3 2xl:px-4 2xl:py-6 ",
        navFlat:
          "rounded-none bg-nB-black text-white  hover:text-nB-black hover:bg-nB-white text-xl font-medium ",
        navFlatPink:
          "rounded-none bg-nB-pink text-nB-black hover:bg-nB-white text-xl font-medium",
        navFlatLime:
          "rounded-none bg-nB-lime text-nB-black hover:bg-nB-white text-xl font-medium",
        circleDS:
          "rounded-full bg-nB-pink hover:bg-nB-violet border-2 border-nB-shadow  text-nB-black shadow-nB-shadow hover:shadow-[4px_4px_0px] hover:-translate-y-1 hover:-translate-x-1 transition will-change-auto ease-in-out active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px]",
      },
      size: {
        default: "h-12 px-8 py-4 rounded-md",
        min: "h-10 ",
        sm: "h-9 rounded-md px-3",
        lg: "h-15 rounded-md px-8",
        icon: "h-10 w-10",
        iconFlat: "h-12 w-12",
        xl: "px-14 h-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonNBVariants> {
  asChild?: boolean
}

const ButtonNB = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonNBVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
ButtonNB.displayName = "Button"

export { ButtonNB, buttonNBVariants }
