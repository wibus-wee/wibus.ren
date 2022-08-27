import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

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
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {props.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  )
}

export default Home
