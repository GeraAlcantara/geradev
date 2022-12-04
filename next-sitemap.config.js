/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://geradev.vercel.app/",
  generateRobotsTxt: true,
};
