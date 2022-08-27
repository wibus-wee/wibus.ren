import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Markdown = dynamic(() => import('../components/widgets/Markdown'), { ssr: false })

export const getStaticProps = async () => {
  const content = await readFile('./contents/readme.md', 'utf8')
  return {
    props: {
      content,
    },
  }
}

const Home: NextPage = (props: any) => {

  return (
    <>
      <NextSeo
        title={"Wibus"}
        description={"Just Uaeua"}
      />
      <div className="prose m-auto mb-8"><h1 className="mb-0">Wibus</h1></div>
      <article>
        <div className="prose m-auto">
          <Suspense >
            <Markdown content={props.content} />
          </Suspense>
        </div>
      </article>
    </>
  )
}

export default Home
