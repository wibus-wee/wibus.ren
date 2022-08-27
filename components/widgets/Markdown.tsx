/*
 * @FilePath: /iucky.cn/components/widgets/Markdown.tsx
 * @author: Wibus
 * @Date: 2022-08-27 17:24:22
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-27 17:24:22
 * Coding With IU
 */

import Link from "next/link";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";


const Markdown: FC<any> = (props) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <Link href={href || "#"}>
            <span>{children}</span>
          </Link>),
      }}
    >
      {props.content}
    </ReactMarkdown>
  )
}

export default Markdown;