import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

const getLinkPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { link } = req.body;
  const response = await fetch(link, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/html",
    },
  });
  const html = await response.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const title = doc.querySelector("title")?.textContent;
  const titleog = doc.querySelector('meta[property="og:title"]')?.getAttribute("content");
  const description = doc.querySelector('meta[name="description"]')?.getAttribute("content");
  const descriptionog = doc.querySelector('meta[name="og:description"]')?.getAttribute("content");
  const image = doc.querySelector('meta[property="image"]')?.getAttribute("content");
  const imageog = doc.querySelector('meta[property="og:image"]')?.getAttribute("content");
  const imageAlt = doc.querySelector('meta[property="image:alt"]')?.getAttribute("content");
  const url = doc.querySelector('meta[property="url"]')?.getAttribute("content");
  const urlog = doc.querySelector('meta[property="og:url"]')?.getAttribute("content");
  const site_name = doc.querySelector('meta[property="site_name"]')?.getAttribute("content");
  const site_nameog = doc.querySelector('meta[property="og:site_name"]')?.getAttribute("content");

  const preview: PreviewCardData = {};
  if (title) preview.title = title;
  if (titleog) preview.titleog = titleog;
  if (description) preview.description = description;
  if (descriptionog) preview.descriptionog = descriptionog;
  if (image) preview.image = image;
  if (imageog) preview.imageog = imageog;
  if (imageAlt) preview.imageAlt = imageAlt;
  if (url) preview.url = url;
  if (urlog) preview.urlog = urlog;
  if (site_name) preview.site_name = site_name;
  if (site_nameog) preview.site_nameog = site_nameog;
  res.status(200).json(preview);
};

export default getLinkPreview;
