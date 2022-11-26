/*
 * @FilePath: /iucky.cn/components/layouts/Nav/index.tsx
 * @author: Wibus
 * @Date: 2022-11-23 13:39:59
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:14:50
 * Coding With IU
 */
import clsx from 'clsx'
import { Events } from 'constants/events'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { createUmamiEvent } from 'utils/umami.util'

import config from '../../../contents/config.json'
import { Play, play } from '../../../utils/play.util'
import styles from './index.module.css'

export const Nav = () => {
  const router = useRouter()
  const pathMatch = useMemo(() => {
    const asPath = router.asPath
    const path = asPath.split('/')[1]
    return path
  }, [router.asPath])
  const [translatePresent, setTranslatePresent] = useState(
    config.nav.findIndex((item) => item.path === pathMatch) * 100,
  )

  const handleIndicator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTranslatePresent(Number(e.currentTarget.dataset.index) * 100)
    play(Play.navClick)
    createUmamiEvent(Events.clickNavItem)
  }

  return (
    <div className={clsx(styles.container)}>
      <div className={styles.nav}>
        <motion.a
          id="indicator"
          href="#"
          className={clsx(styles['floating-indicator'])}
          animate={{ x: `${translatePresent}%` }}
        />
        {config.nav.map((item, index) => {
          return (
            <Link
              href={item.external ? item.path : `/${item.path}`}
              key={index}
              className={clsx(styles['nav-item'], 'nav-item')}
              data-index={index}
              onClick={handleIndicator}
            >
              <div
                className={clsx(
                  styles['nav-text'],
                  pathMatch === item.path && !item.external && styles['active'],
                )}
              >
                {item.text}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
