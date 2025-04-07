import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

export const fakeCardUIVariants = cva("bg-nB-green", {
  variants: {
    variant: {
      default: "bg-nB-green",
      blue: "bg-nB-blue",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
export interface FakeCardUIProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fakeCardUIVariants> {
  className?: string
}

const MockupPost = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-background max-w-60 w-full h-full max-h-80 rounded-xl shadow-nB-shadow shadow-[5px_5px_0] flex flex-col justify-center border-2 border-nB-shadow ",
      className,
    )}
    {...props}
  />
))
MockupPost.displayName = "MockupPost"

const MockupPostHeader = React.forwardRef<HTMLDivElement, FakeCardUIProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-2/10 w-full flex items-center gap-2 p-2.5", className)}
      {...props}
    >
      <div
        className={cn(
          fakeCardUIVariants({ variant, className }),
          "size-5 rounded-full shrink-0",
        )}
      ></div>
      <div className="w-full space-y-1 ">
        <div className="flex gap-1 items-center">
          <div className="h-1.5 w-3 lg:w-7 bg-nB-black dark:bg-nB-white rounded-full"></div>
          <div className="h-1.5 w-7 lg:w-14 bg-nB-black dark:bg-nB-white rounded-full"></div>
        </div>
        <div className="h-1 w-1/4 bg-[#C9C8C9] rounded-full"></div>
      </div>
    </div>
  ),
)
MockupPostHeader.displayName = "MockupPostHeader"

const MockupPostImgWrapper = React.forwardRef<HTMLDivElement, FakeCardUIProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        fakeCardUIVariants({ variant, className }),
        "w-full h-6/10 relative",
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
MockupPostImgWrapper.displayName = "MockupPostImgWrapper"

const MockupPostFooter = () => {
  return (
    <div className="h-2/10 w-full flex flex-col gap-2 p-2.5">
      <div className="bg-[#C9C8C9] h-1.5 rounded-full w-16 lg:w-32"></div>
      <div className="bg-[#C9C8C9] h-1.5 rounded-full w-12 lg:w-24"></div>
    </div>
  )
}

export { MockupPost, MockupPostHeader, MockupPostImgWrapper, MockupPostFooter }
