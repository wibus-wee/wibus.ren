/*
 * @FilePath: /iucky.cn/components/layouts/Grid/index.tsx
 * @author: Wibus
 * @Date: 2022-11-24 13:41:53
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-24 13:46:35
 * Coding With IU
 */
import clsx from "clsx"
import styles from "./index.module.css"

export function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>
}

export function GridItem({ cstart, cend, rstart, rend, about, children }) {
  return (
    <div className={clsx(styles.gridItem, about && styles.about)}
      style={{
        gridColumnStart: cstart,
        gridColumnEnd: cend,
        gridRowStart: rstart,
        gridRowEnd: rend,
      }}
    >{children}</div>
  )
}