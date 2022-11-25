/*
 * @FilePath: /iucky.cn/components/layouts/Header/index.tsx
 * @author: Wibus
 * @Date: 2022-08-26 16:39:58
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-23 18:45:39
 * Coding With IU
 */

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";
import config from '../../../contents/config.json'

const Header: FC = () => {
  return (
    <div className={clsx(styles.container)}>
      <a href="/" className={clsx(styles["logo"])} >Wibus</a>
      <div className={clsx(styles["icons"])}>
        {
          config["nav-right"].map((item, index) => {
            return (
              <a href={item.src} key={index} className={clsx(styles["icon-item"])} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: item.icon }} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Header;