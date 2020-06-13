import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


/*
-> You can not use getStaticProps with getServerSideProps.
-> To use SSG, please remove getServerSideProps
*/
/*
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
      allPostsData: [
        { title: 'Two Forms of Pre-rendering', date: '2020-01-01' },
        { title: 'When to Use Static Generation v.s. Server-side Rendering', date: '2020-01-02' }
      ]
    }
  }
}
*/

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Howdy! I'm Matías, a fullstack software engineer from <a href="https://goo.gl/maps/KGJbwMrzSz7mV1T37" target="_blank">Córdoba, Argentina</a>.
          Here's a <a href="https://www.linkedin.com/in/matiasherranz" target="_blank">link</a> to my profile.
        </p>
        <p>
          (This is a sample website - you can building one like this with the{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial!</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
