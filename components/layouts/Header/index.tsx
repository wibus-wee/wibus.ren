/*
 * @FilePath: /iucky.cn/components/layouts/Header/index.tsx
 * @author: Wibus
 * @Date: 2022-08-26 16:39:58
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:28:07
 * Coding With IU
 */
import clsx from 'clsx'
import { FC } from 'react'

import config from '../../../contents/config.json'
import styles from './index.module.css'

const Header: FC = () => {
  return (
    <div className={clsx(styles.container)}>
      <a href="/" className={clsx(styles['logo'])}>
        Wibus
      </a>
      <div className={clsx(styles['icons'])}>
        {config['nav-right'].map((item, index) => {
          return (
            <a
              href={item.src}
              key={index}
              className={clsx(styles['icon-item'])}
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Header
