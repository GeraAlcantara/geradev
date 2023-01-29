/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.jaguarek.dev",
  generateRobotsTxt: true,
  exclude: ["/gracias"],
};
