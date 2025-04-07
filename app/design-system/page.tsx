import { ButtonNB } from "@/components/ui/buttonNB"
import CtaLink from "@/components/ui/ctaLink"
import InputTest from "@/components/ui/input-test"

export default function PageDesignSistem() {
  return (
    <div className="container m-auto my-8 items-center justify-items-center min-h-screen font-[family-name:var(--font-hanken-grotesk)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full mt-8 flex flex-col gap-y-8">
          {/* header */}
          <div>
            <InputTest />
          </div>
          <div className="flex justify-center items-center w-full bg-nB-pink/80 pb-1">
            <div className="font-[family-name:var(--font-kanit)] text-[3.56rem] font-black uppercase flex flex-col leading-0">
              <span className="text-8xl leading-4">Buttons </span>
              <span className="text-9xl">styles </span>
              <span>Neo Brutalism</span>
            </div>
          </div>
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">CTA Link</h2>

            <CtaLink href="/" label="CTA Home" />
          </div>

          {/* button circle Drop shadow*/}
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">
              Drop Shadow btn Icon
            </h2>

            <ButtonNB
              variant={"secondary"}
              size={"iconFlat"}
              className="font-extrabold text-2xl "
            >
              G
            </ButtonNB>
          </div>
          {/* button default */}
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">Default btn</h2>

            <ButtonNB
              variant={"default"}
              size={"default"}
              className=" text-lg "
            >
              Click me 🎉
            </ButtonNB>
          </div>
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">destructive btn</h2>
            <div className="flex gap-4">
              <ButtonNB
                variant={"destructive"}
                size={"sm"}
                className=" text-lg "
              >
                destructive ✖
              </ButtonNB>
              <ButtonNB
                variant={"destructive"}
                size={"default"}
                className=" text-lg "
              >
                destructive ✖
              </ButtonNB>
              <ButtonNB
                variant={"destructive"}
                size={"lg"}
                className=" text-lg "
              >
                destructive ✖
              </ButtonNB>
              <ButtonNB
                variant={"destructive"}
                size={"xl"}
                className=" text-lg "
              >
                destructive ✖
              </ButtonNB>
              <ButtonNB
                variant={"destructive"}
                size={"icon"}
                className=" text-lg "
              >
                ✖
              </ButtonNB>
            </div>
          </div>
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">Ghost btn</h2>

            <ButtonNB variant={"ghost"} size={"lg"} className=" text-lg ">
              👻
            </ButtonNB>
          </div>
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">outline btn</h2>

            <ButtonNB variant={"outline"} size={"lg"} className=" text-lg ">
              outline ⬛
            </ButtonNB>
          </div>
          <div className="gap-4 mt-12 flex justify-center items-center flex-col ">
            <h2 className="text-5xl font-light text-center">secondary btn</h2>

            <ButtonNB variant={"secondary"} size={"lg"} className=" text-lg ">
              secondary 🥈
            </ButtonNB>
          </div>
        </section>
      </main>
    </div>
  )
}
