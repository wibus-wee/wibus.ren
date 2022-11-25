/*
 * @FilePath: /iucky.cn/components/layouts/Grid/index.tsx
 * @author: Wibus
 * @Date: 2022-11-24 13:41:53
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 14:22:59
 * Coding With IU
 */
import clsx from "clsx"
import styles from "./index.module.css"
import { motion } from "framer-motion"

export function Grid({ children, ...props }) {
  return <div className={styles.grid} {...props} >{children}</div>
}

export function GridItem({ cstart, cend, rstart, rend, about = false, children }) {
  return (
    <div 
      className={clsx(styles.gridItem, about && styles.about)}
      style={{
        gridColumnStart: cstart,
        gridColumnEnd: cend,
        gridRowStart: rstart,
        gridRowEnd: rend,
      }}
    >{children}</div>
  )
}