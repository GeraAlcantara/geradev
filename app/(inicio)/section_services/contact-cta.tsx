"use client"
import IconWhatsapp from "@/components/icons/icon-whatsapp"
import CTASvg from "@/components/ui/CTASvg"
import { useContactDialog } from "@/provider/contact-dialog-provider"

export default function ContactCta({ ctatext }: { ctatext: string }) {
  const { setOpen } = useContactDialog()
  return (
    <button
      className={
        "group scale-95 hover:scale-100 transition-all w-fit grid grid-cols-1 items-center justify-items-center text-nB-black"
      }
      onClick={() => setOpen(true)}
      aria-label="Contacto"
    >
      <span className="sr-only"> Contacto</span>
      <div className="size-32 lg:size-48 col-start-1 row-start-1 spin12s">
        <CTASvg text={ctatext} className="uppercase " />
      </div>
      <div className="rounded-full size-20 lg:size-28 bg-nB-black/90 col-start-1 row-start-1 flex items-center justify-center group-hover:bg-nB-black text-nB-white">
        <div className="size-8 lg:size-14">
          <IconWhatsapp />
        </div>
      </div>
    </button>
  )
}
