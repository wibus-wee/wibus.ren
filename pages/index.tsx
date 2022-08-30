import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Markdown from '../components/widgets/Markdown'


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
        <Markdown content={props.content} />
        </div>
      </article>
    </>
  )
}

export default Home
