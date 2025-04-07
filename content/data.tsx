export const contactInfo = {
  link: "https://wa.me/+529841111111",
}
export type SocialData = {
  url: string
  social: "tiktok" | "instagram" | "twitch" | "pinterest" | "linkedin"
}
/* TODO: Check if this data remain here */
export const socialData: SocialData[] = [
  {
    url: "https://www.linkedin.com/in/gerardo-alcantara-4804b328/",
    social: "linkedin",
  },
  {
    url: "https://www.twitch.tv/jaguar_ek",
    social: "twitch",
  },
  {
    url: "https://www.instagram.com/jaguarekdev/",
    social: "instagram",
  },
  {
    url: "https://www.tiktok.com/@jaguarekdev",
    social: "tiktok",
  },
  {
    url: "https://mx.pinterest.com/geralcantara/",
    social: "pinterest",
  },
]
