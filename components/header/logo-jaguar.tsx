import Link from "next/link"

export default function LogoJaguar() {
  return (
    <Link href={"/"} className="flex relative">
      <h1 className="font-black font-[family-name:var(--font-kanit)] text-4xl uppercase ">
        Jaguar
      </h1>
      <div className="size-4 rounded-full bg-nB-black top-[18px] relative" />
    </Link>
  )
}
