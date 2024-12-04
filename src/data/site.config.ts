interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}
export const siteConfig: SiteConfig = {
	site: 'https://isaacaudet.com/', // Your custom domain
	author: 'Isaac Audet', // Your name as the site author
	title: "Isaac Audet's Blog", // A descriptive title for your site
	description: 'Exploring ideas, projects, and my journey as an electrician.', // A short, engaging description for meta tags
	lang: 'en-CA', // Language code (en-CA for Canadian English)
	ogLocale: 'en_CA', // OpenGraph locale (Canadian English)
	shareMessage: 'Check out this post!', // A message to accompany social media shares
	paginationSize: 6 // Number of posts per page
}
