import { readFile } from 'fs/promises'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Flex, Grid, GridItem } from '../components/layouts/Grid'
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
    <div className="h-screen">
      <NextSeo title={'Wibus'} description={'Just Uaeua'} />
      <Grid>
        <GridItem index={0} large>
          <article>
            <div className="prose m-auto">
              <Markdown content={props.content} />
            </div>
          </article>
        </GridItem>
        <Flex>
          <GridItem index={1}>
            <Twitter />
          </GridItem>
          <GridItem index={2}>
            <Photos />
          </GridItem>
        </Flex>
        <GridItem index={3} superLarge>
          <article>
            <div className="prose others max-w-[100%]">
              <Markdown content={props.others} />
            </div>
          </article>
        </GridItem>
      </Grid>
    </div>
  )
}

export default Home
