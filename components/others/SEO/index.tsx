/*
 * @FilePath: /iucky.cn/components/others/SEO/index.tsx
 * @author: Wibus
 * @Date: 2022-08-09 14:27:23
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 20:23:57
 * Coding With IU
 */
import merge from 'lodash-es/merge'
import sample from 'lodash-es/sample'
import { observer } from 'mobx-react-lite'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'
import type { OpenGraph } from 'next-seo/lib/types'
import type { FC } from 'react'

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
  const Title = `${title} - 'Wibus`

  return (
    <NextSeo
      {...{
        title,
        titleTemplate: `%s - Wibus`,
        openGraph: merge(
          {
            profile: {
              username: "Wibus",
            },
            type: 'article',
            locale: 'zh-cn',
            site_name: 'Wibus',
            description:
              description || 'Just Uaeua',
            article: {
              authors: ["Wibus"],
            },
            title: Title,
            images: [
              {
                url: sample("https://github.com/wibus-wee.png"),
                alt: `${title} - Wibus`,
              },
            ],
          } as OpenGraph,
          openGraph,
        ),
        description:
          description ||
          'Just Uaeua',
        twitter: {
          cardType: 'summary',
          site: "https://iucky.cn",
        },

        ...rest,
      }}
    />
  )
})

export const Seo = SEO