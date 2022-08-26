/*
 * @FilePath: /nx-theme-tiny/components/others/SEO/index.tsx
 * @author: Wibus
 * @Date: 2022-08-09 14:27:23
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-09 14:40:24
 * Coding With IU
 */
import merge from 'lodash-es/merge'
import sample from 'lodash-es/sample'
import { observer } from 'mobx-react-lite'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'
import type { OpenGraph } from 'next-seo/lib/types'
import type { FC } from 'react'
import { useSnapshot } from 'valtio'
import appState from '../../../states/appState'

// import { useInitialData, useThemeConfig } from '~/hooks/use-initial-data'
// import { getRandomImage } from '~/utils/images'

// import { useStore } from '../../../store'

type SEOProps = {
  title: string
  description?: string
  openGraph?: { type?: 'website' | 'article' } & OpenGraph
} & NextSeoProps

export const SEO: FC<SEOProps> = observer((props) => {
  const { title, description, openGraph, ...rest } = props
  const { aggregate } = useSnapshot(appState) as any
  const {
    urls: { web_url },
    sites,
    user,
  } = aggregate.aggregatedData
  const Title = `${title} - ${sites.title}`

  return (
    <NextSeo
      {...{
        title,
        titleTemplate: `%s - ${sites.title}`,
        openGraph: merge(
          {
            profile: {
              username: user.name || user.username,
            },
            type: 'article',
            locale: 'zh-cn',
            site_name: sites.title || '',
            description:
              description || sites.description || '',
            article: {
              authors: [user.name || (sites.name as string)],
            },
            title: Title,
            images: [
              {
                url: sample(user.avatar),
                alt: `${title} - ${sites.title}`,
              },
            ],
          } as OpenGraph,
          openGraph,
        ),
        description:
          description ||
          sites.description ||
          user.introduce ||
          '',
        twitter: {
          cardType: 'summary',
          site: web_url,
        },

        ...rest,
      }}
    />
  )
})

export const Seo = SEO