/*
 * @FilePath: /iucky.cn/components/layouts/Grid/index.tsx
 * @author: Wibus
 * @Date: 2022-11-24 13:41:53
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 14:22:59
 * Coding With IU
 */
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from './index.module.css'

export function Grid({ children, ...props }) {
  return (
    <div className={styles.grid} {...props}>
      {children}
    </div>
  )
}

export function Flex({ children, ...props }) {
  return (
    <div className={styles.flex} {...props}>
      {children}
    </div>
  )
}

export function GridItem({
  large = false,
  superLarge = false,
  centered = false,
  children,
  lightOnly = false,
  className = '',
  index,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: Math.min(0.25 + index * 0.2, 0.8) }}
      className={clsx(
        styles.gridItem,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className,
        superLarge && styles.superLarge,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
