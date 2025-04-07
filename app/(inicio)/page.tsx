import ProjectsBento from "@/app/(inicio)/bento_grids/projectsBento"
import HeroSection from "@/app/(inicio)/HeroSection/heroSection"
import SectionSuccess from "./section_success/section-success"
import SectionRecluters from "./section_recluters/section_recluters"
import SectionPurpose from "./section_purpose/section-purpose"

import SectionWorkMindset from "./section_work_mindset/section-work-mindset"

export default async function Home() {
  return (
    <>
      <div className="contain-content m-auto font-[family-name:var(--font-hanken-grotesk)] font-normal">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <HeroSection />
          <SectionRecluters />
          <ProjectsBento />
          <section className="w-full ">
            <SectionPurpose />
            <SectionSuccess />
          </section>
          {/*  <SectionServices /> */}
          <SectionWorkMindset />
        </main>
      </div>
    </>
  )
}
