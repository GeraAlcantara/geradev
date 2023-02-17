import Link from 'next/link'

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <div className="flex w-full justify-center cursor-pointer">
        <h1 className="font-Raleway font-extrabold text-xl">Jaguar</h1>
        <div className="bg-brand-pink-500 w-2 h-2 rounded-full relative top-[14px] " />
      </div>
    </Link>
  )
}
