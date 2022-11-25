import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Grid, GridItem } from '../components/layouts/Grid'
import Markdown from '../components/widgets/Markdown'
import { Photos } from '../components/widgets/Photos'
import { Twitter } from '../components/widgets/Twitter'


export const getStaticProps = async () => {
  const content = await readFile('./contents/readme.md', 'utf8')
  const others = await readFile('./contents/others.md', 'utf8')
  return {
    props: {
      content,
      others,
    },
  }
}

const Home: NextPage = (props: any) => {

  return (
    <div className='h-screen'>
      <NextSeo
        title={"Wibus"}
        description={"Just Uaeua"}
      />
      <Grid>
        <GridItem cstart={1} cend={2} rstart={1} rend={3} about>
          <article>
            <div className="prose m-auto">
              <Markdown content={props.content} />
            </div>
          </article>
        </GridItem>
        <GridItem cstart={2} cend={3} rstart={1} rend={2}>
          <Twitter />
        </GridItem>
        <GridItem cstart={3} cend={4} rstart={1} rend={2} >
          <Photos />
        </GridItem>
        <GridItem cstart={2} cend={4} rstart={2} rend={3} >
          <article>
            <div className="prose others m-auto">
              <Markdown content={props.others} />
            </div>
          </article>
        </GridItem>
      </Grid>
    </div>
  )
}

export default Home
