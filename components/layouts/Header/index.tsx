/*
 * @FilePath: /iucky.cn/components/layouts/Header/index.tsx
 * @author: Wibus
 * @Date: 2022-08-26 16:39:58
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-23 18:33:04
 * Coding With IU
 */

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";
import config from '../../../contents/config.json'
import { GitHub } from "../../../public/iconsTS/github";
import { Blog } from "../../../public/iconsTS/blog";
import { Email } from "../../../public/iconsTS/email";
import { Twitter } from "../../../public/iconsTS/twitter";

const Header: FC = () => {
  return (
    <div className={clsx(styles.container)}>
      <a href="/" className={clsx(styles["logo"])} >Wibus</a>
      <div className={clsx(styles["icons"])}>
        {
          config["nav-right"].map((item, index) => {
            return (
              <Link href={item.src} key={index}>
                <a className={clsx(styles["icon-item"])} target="_blank" rel="noreferrer">
                  {
                    item.name === "github" ? <GitHub /> : (item.name === 'twitter' ? <Twitter /> : (item.name === 'email' ? <Email /> : (item.name === 'blog' ? <Blog /> : null)))
                  }
                </a>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header;