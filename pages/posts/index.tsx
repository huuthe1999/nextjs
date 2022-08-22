/* eslint-disable @next/next/no-sync-scripts */
import { IncomingMessage, ServerResponse } from 'http'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
type Props = {}

const Posts: NextPage = (props: Props) => {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </div>
  )
}
export async function getServerSideProps({
  req,
  res,
}: {
  req: IncomingMessage
  res: ServerResponse
}) {
  // console.log(props)
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  return {
    props: {},
  }
}

export default Posts
