import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://crybox.vercel.app/'

	const routes = [
		'',
		'controller-layout',
		'alternative-layout',
		'customize/controls',
		'customize/gameplay',
	]

	return routes.map(route => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: route === '' ? 1.0 : 0.8,
	}))
}
