import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await fetch(`${"https://blog-app-hot.herokuapp.com/api/"}articles/home/tv`)
    const articles: any[] = await response.json()



    const fields: ISitemapField[] = articles.map(article => ({
        loc: `https://www.hotseatmag.com/article/${article.slug}`,
        lastmod: new Date().toISOString(),

    }))

    return getServerSideSitemap(ctx, fields)
}
export default function site() { }
