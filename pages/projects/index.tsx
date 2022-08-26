/*
 * @FilePath: /iucky.cn/pages/Projects/index.tsx
 * @author: Wibus
 * @Date: 2022-08-26 18:49:23
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 21:42:43
 * Coding With IU
 */

import { NextPage } from "next";
import styles from "./index.module.css";
import clsx from "clsx";
import { readFile } from "fs/promises";
import { SEO } from "../../components/others/SEO";

export const getStaticProps = async () => {
  const data = await readFile("./contents/projects.json", "utf-8");
  return {
    props: {
      data: JSON.parse(data),
    },
  };
}

const Projects: NextPage<any> = (props) => {
  return (
    <>
    <SEO 
      title="Projects"
    />
      <div className="prose m-auto mb-8">
        <h1 className="mb-0">Projects</h1>
        <p className="opacity-50 italic mt-[-1.5rem]">
          List of projects I have worked on.
        </p>
      </div>
      <article>
        <div className="prose m-auto">
          {Object.keys(props.data).map((key, index) => {
            return (
              <>
                <h4 className="mt-10 font-bold">{key}</h4>
                <div className={clsx(styles.projectItem, "py-2 -mx-3 gap-2")}>
                  {props.data[key].map((item) => {
                    return (
                      <a href={item.repo ? `https://github.com/${item.repo}` : item.url} className={clsx(styles.item, "relative flex items-center")}>
                      <div className="pt-2 pr-5">
                        <div className="text-3xl opacity-50" style={{
                          // mask: `${item.icon ? `url(${item.icon})` : "S"} no-repeat`,
                          // maskSize: "100% 100%",
                          background: `${item.icon ? `url(${item.icon})` : ""} 0% 0% / 100% 100% no-repeat`,
                          // WebkitMaskSize: "100% 100%",
                          color: "currentColor",
                          display: "inline-block",
                          height: "1.2em",
                          width: "1.2em",
                          verticalAlign: "text-bottom",
                        }}>
                          {!item.icon ? item.symbol || null : null}
                        </div>
                      </div>
                      <div className="flex-auto">
                        <div>{item.name}</div>
                        <div className="desc text-sm opacity-50 font-normal">
                          {item.description}
                        </div>
                      </div>
                    </a>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default Projects;