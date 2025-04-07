import IMGGallery1 from "@/public/assets/projects/design/gallery/men_notification.jpg"
import IMGGallery2 from "@/public/assets/projects/design/gallery/newspaper.jpg"
import IMGGallery3 from "@/public/assets/projects/design/gallery/phone_render.jpg"
import IMGGallery4 from "@/public/assets/projects/design/gallery/portada.jpg"
import IMGGallery5 from "@/public/assets/projects/design/gallery/postsPolaroidInclusive.jpg"
import IMGGallery6 from "@/public/assets/projects/design/gallery/postsPolaroid_1.jpg"
import IMGGallery7 from "@/public/assets/projects/design/gallery/postsPolaroid_2.jpg"
import IMGGallery8 from "@/public/assets/projects/design/gallery/postsPolaroid_3.jpg"
import IMGGallery9 from "@/public/assets/projects/design/gallery/screenshot_video.jpg"
import IMGGallery10 from "@/public/assets/projects/design/gallery/tonico_godinez.jpg"
import IMGGallery11 from "@/public/assets/projects/design/gallery/isometric_rooms.png"
import IMGGallery12 from "@/public/assets/projects/design/gallery/network.png"
import Image from "next/image"
import PostImgIsometric from "@/public/assets/projects/design/a_isometric_3d.jpg"
import PolloStory from "@/public/assets/projects/design/gallery/pollo_instagram_story.jpg"

const imagesArr = [
  IMGGallery7,
  IMGGallery11,
  IMGGallery6,
  PolloStory,
  IMGGallery1,
  IMGGallery9,
  PostImgIsometric,
  IMGGallery5,
  IMGGallery4,
  IMGGallery3,
  IMGGallery2,
  IMGGallery10,
  IMGGallery8,
  IMGGallery12,
]
export default function GalleryImgs() {
  return (
    <>
      {imagesArr.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Gallery Image ${idx + 1}`}
          className="border-2 border-nB-shadow bg-background shadow-nB-shadow shadow-[4px_4px_0px] rounded-lg break-inside-avoid"
        />
      ))}
    </>
  )
}
