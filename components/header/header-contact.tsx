"use client"

import { useContactDialog } from "@/provider/contact-dialog-provider"
import { ButtonNB } from "../ui/buttonNB"

export default function HeaderContact() {
  const { setOpen } = useContactDialog()
  return (
    <ButtonNB
      variant={"navFlatPink"}
      size={"xl"}
      className="w-full lg:w-auto lg:h-full"
      onClick={() => setOpen(true)}
      aria-label="Contacto"
    >
      Contacto
    </ButtonNB>
  )
}
