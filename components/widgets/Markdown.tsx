/*
 * @FilePath: /iucky.cn/components/widgets/Markdown.tsx
 * @author: Wibus
 * @Date: 2022-08-27 17:24:22
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:22:44
 * Coding With IU
 */
import { Events } from 'constants/events'
import Link from 'next/link'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { createUmamiEvent } from 'utils/umami.util'

// import remarkGfm from "remark-gfm";

const Markdown: FC<any> = (props) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      // remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <Link
            href={href || '#'}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              createUmamiEvent(
                `${Events.clickContentLink} -- ${e.currentTarget.text}`,
              )
            }}
          >
            <span>{children}</span>
          </Link>
        ),
      }}
    >
      {props.content}
    </ReactMarkdown>
  )
}

export default Markdown
