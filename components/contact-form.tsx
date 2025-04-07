import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ButtonNB } from "@/components/ui/buttonNB"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ContactFormState } from "@/types/contact-form-state"
import { useActionState, useEffect, useRef, useState } from "react"
import { submitContactForm } from "@/actions/action-contact"
import { useContactDialog } from "@/provider/contact-dialog-provider"
import { Check, ChevronsUpDown, Mail, Phone } from "lucide-react"
// Country data with flags
const countries = [
  { value: "us", label: "United States", flag: "🇺🇸", code: "+1" },
  { value: "ca", label: "Canada", flag: "🇨🇦", code: "+1" },
  { value: "mx", label: "Mexico", flag: "🇲🇽", code: "+52" },
  { value: "uk", label: "United Kingdom", flag: "🇬🇧", code: "+44" },
  { value: "fr", label: "France", flag: "🇫🇷", code: "+33" },
  { value: "de", label: "Germany", flag: "🇩🇪", code: "+49" },
  { value: "jp", label: "Japan", flag: "🇯🇵", code: "+81" },
  { value: "cn", label: "China", flag: "🇨🇳", code: "+86" },
  { value: "br", label: "Brazil", flag: "🇧🇷", code: "+55" },
  { value: "in", label: "India", flag: "🇮🇳", code: "+91" },
]
/* Phone mask */
function formatPhoneNumber(value: string) {
  if (!value) return value
  const phoneNumber = value.replace(/[^\d]/g, "")

  //apply mask
  if (phoneNumber.length < 4) return phoneNumber
  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`
}

// Initial form state
const initialState: ContactFormState = {
  errors: {},
  success: false,
  message: "",
}

export default function ContactForm({
  className,
}: React.ComponentProps<"form">) {
  const [contactMethod, setContactMethod] = useState("email")
  const [phone, setPhone] = useState("")
  const [countryOpen, setCountryOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const formRef = useRef<HTMLFormElement>(null)

  // Use the useActionState hook to handle form submission with server action
  /* diseable eslint */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(submitContactForm, initialState)

  const { setOpen } = useContactDialog()

  // Handle phone input with mask
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setPhone(formattedPhone)
  }
  useEffect(() => {
    if (state.success) {
      // Reset phone field (the only controlled input)
      setPhone("")

      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }

      // Close the form after a delay
      const timer = setTimeout(() => {
        setOpen(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state.success, setOpen])
  return (
    <form ref={formRef} className={cn("grid items-start gap-4 ", className)}>
      {state.success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            {state.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Form-level errors */}
      {state.errors?._form && state.errors._form.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>{state.errors._form[0]}</AlertDescription>
        </Alert>
      )}
      <div className="grid gap-2">
        <Label htmlFor="name-input">Nombre</Label>
        <Input
          type="text"
          id="name-input"
          name="name"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={
            state.errors?.name && state.errors.name.length > 0
              ? "true"
              : "false"
          }
          placeholder="¿Cómo te gusta que te llame?"
          min="2"
          className={`text-sm ${state.errors?.name ? "border-red-500" : ""}`}
        />
        {state.errors?.name && state.errors.name.length > 0 && (
          <p
            id="streetAddress-error"
            className="text-xs text-red-500 lg:text-sm"
          >
            {state.errors.name[0]}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="contact-method" className=" font-medium">
          ¿Cómo quieres que te responda?
        </Label>
        <RadioGroup
          name="contactMethod"
          id="contact-method"
          defaultValue={contactMethod}
          onValueChange={setContactMethod}
          className="flex items-center gap-8 mt-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" aria-label="Email" />
            <Label htmlFor="email" className="flex items-center">
              <Mail className="mr-1 h-4 w-4" /> Email
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" aria-label="Phone" />
            <Label htmlFor="phone" className="flex items-center">
              <Phone className="mr-1 h-4 w-4" /> Teléfono
            </Label>
          </div>
        </RadioGroup>
        {state.errors?.contactMethod &&
          state.errors.contactMethod.length > 0 && (
            <p className="text-xs text-red-500 lg:text-sm mt-1">
              {state.errors.contactMethod[0]}
            </p>
          )}
      </div>
      {contactMethod === "email" ? (
        <div className="space-y-2">
          <Label htmlFor="email-input" className="">
            Tu correo más usado
          </Label>
          <Input
            id="email-input"
            name="email"
            type="email"
            placeholder="ej.tu@dominio.com"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={
              state.errors?.email && state.errors.email.length > 0
                ? "true"
                : "false"
            }
            className="text-sm"
          />
          {state.errors?.email && state.errors.email.length > 0 && (
            <p className="text-xs text-red-500 lg:text-sm">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="phone-input" className="">
            Tu número (con código de país)
          </Label>
          <div className="flex space-x-2">
            <Popover open={countryOpen} onOpenChange={setCountryOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  aria-expanded={countryOpen}
                  aria-label="Select country code"
                  className="w-[140px] justify-between"
                >
                  <span className="flex items-center">
                    <span className="mr-1">{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList>
                    <CommandEmpty>
                      No se ha encontrado ningún país.
                    </CommandEmpty>
                    <CommandGroup className="max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <CommandItem
                          key={country.value}
                          value={country.value}
                          onSelect={() => {
                            setSelectedCountry(country)
                            setCountryOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedCountry.value === country.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          <span className="mr-2">{country.flag}</span>
                          <span>{country.label}</span>
                          <span className="ml-auto text-sm text-muted-foreground">
                            {country.code}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Input
              id="phone-input"
              name="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(555)-123-4567"
              autoComplete="tel"
              required
              aria-required="true"
              aria-invalid={
                state.errors?.phone && state.errors.phone.length > 0
                  ? "true"
                  : "false"
              }
              className="flex-1 text-sm"
            />
            {/* Hidden input to pass the country code to the server action */}
            <input
              type="hidden"
              name="countryCode"
              value={selectedCountry.code}
            />
          </div>
          {state.errors?.phone && state.errors.phone.length > 0 && (
            <p className="text-xs text-red-500 lg:text-sm">
              {state.errors.phone[0]}
            </p>
          )}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="message" className="">
          Tu mensaje (mínimo 10 caracteres)
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder='Ej: "Hola! Necesito ayuda con..." o "Me encantaría platicar sobre..."'
          className="min-h-[60px] text-sm"
          required
          aria-required="true"
          minLength={10}
          maxLength={200}
          aria-invalid={
            state.errors?.message && state.errors.message.length > 0
              ? "true"
              : "false"
          }
        />
        {state.errors?.message && state.errors.message.length > 0 && (
          <p className="text-xs text-red-500 lg:text-sm">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <ButtonNB type="submit" variant={"default"}>
        Enviar
      </ButtonNB>
    </form>
  )
}
