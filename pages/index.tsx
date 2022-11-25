import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Grid, GridItem } from '../components/layouts/Grid'
import Markdown from '../components/widgets/Markdown'
import { Twitter } from '../components/widgets/Twitter'


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
      <Grid>
        <GridItem
          cstart={1}
          cend={2}
          rstart={1}
          rend={2}
          about
        >
          <article>
            <div className="prose m-auto">
              <Markdown content={props.content} />
            </div>
          </article>
        </GridItem>
        <GridItem
          cstart={2}
          cend={3}
          rstart={1}
          rend={3}
        >
          <Twitter />
        </GridItem>
      </Grid>
    </>
  )
}

export default Home
