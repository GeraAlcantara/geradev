"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { createContext, useState } from "react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import ContactForm from "@/components/contact-form"
import { ButtonNB } from "@/components/ui/buttonNB"

const ContactDialogContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({ open: false, setOpen: () => {} })

export function ContactDialogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const value = { open, setOpen }

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          {/* <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger> */}
          <DialogContent className=" shadow-[6px_6px_0px] shadow-nB-shadow border border-nB-shadow  ">
            <DialogHeader>
              <DialogTitle className="kanit xl:text-3xl">
                Conversemos sobre tu idea
              </DialogTitle>
              <DialogDescription className="">
                Cuéntame de tu proyecto o duda y elige cómo prefieres que te
                responda: Correo electrónico | Llamada | WhatsApp. Prometo
                responderte con ideas, no con respuestas automáticas.
              </DialogDescription>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          {/* <DrawerTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DrawerTrigger> */}
          <DrawerContent className="border-nB-black ">
            <DrawerHeader className="text-left">
              <DrawerTitle className="kanit  text-xl">
                Conversemos sobre tu idea
              </DrawerTitle>
              <DrawerDescription className="">
                Cuéntame de tu proyecto o duda y elige cómo prefieres que te
                responda.
              </DrawerDescription>
            </DrawerHeader>
            <ContactForm className="px-4" />
            <DrawerFooter className="pt-2">
              {/* <DrawerClose asChild>
                <ButtonNB variant="destructive" className="">
                  Cancel
                </ButtonNB>
              </DrawerClose> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </ContactDialogContext.Provider>
  )
}
export function useContactDialog() {
  const context = React.useContext(ContactDialogContext)
  if (context === undefined) {
    throw new Error(
      "useContactDialog must be used within a ContactDialogProvider",
    )
  }
  return context
}
