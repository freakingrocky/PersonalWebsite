import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

type Props = {
    title?: string
    description?: string
    pathname?: string
    image?: string
    children?: React.ReactNode
}

const SEO = ({ title = ``, description = ``, pathname = ``, image = ``, children = null }: Props) => {
    const site = useSiteMetadata()

    const {
        siteTitle,
        siteTitleAlt: defaultTitle,
        siteUrl,
        siteDescription: defaultDescription,
        siteLanguage,
        siteImage: defaultImage,
        author,
    } = site

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        image: `${siteUrl}${image || defaultImage}`,
    }
    return (
        <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:alt" content={seo.description} />
            <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
            <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
            <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
            {children}
        </Helmet>
    )
}

export default SEO