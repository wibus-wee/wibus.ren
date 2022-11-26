/*
 * @FilePath: /iucky.cn/components/widgets/Photos/index.tsx
 * @author: Wibus
 * @Date: 2022-11-25 09:47:36
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:27:18
 * Coding With IU
 */
import { Events } from 'constants/events'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { createUmamiEvent } from 'utils/umami.util'

import config from '@contents/config.json'
import { Tab } from '@headlessui/react'

import { Play, play } from '../../../utils/play.util'
import styles from './index.module.css'

const PhotoTab = ({
  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {},
  children,
  ...props
}) => {
  return (
    <Tab className={styles.tab} onClick={onClick} {...props}>
      {children}
    </Tab>
  )
}

const PhotoDisplay = ({
  photos,
  ...props
}: {
  photos: {
    path: string
    position: string
  }[]
  position?: string | string[]
  [key: string]: any
}) => {
  const [current, setCurrent] = useState(0)

  return (
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${photos[current].path})`,
        backgroundPosition: photos[current].position,
      }}
      onClick={() => {
        setCurrent((current + 1) % photos.length)
        play(Play.photosClick)
        createUmamiEvent(Events.clickPhotos)
      }}
    ></div>
  )
}

export const Photos = () => {
  const [translate, setTranslate] = useState(0)
  const [items, setItems] = useState(0)
  const [y, setY] = useState(200)

  const tabRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setItems(config.photos.length)
  }, [])

  const handleIndicator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const width = tabRef.current?.clientWidth || 100
    const persent = (width / items).toFixed(2)
    if (!e.currentTarget.dataset.index) return
    setTranslate(
      Number(Number(e.currentTarget.dataset.index) - 1) * Number(persent),
    )
    // console.log(e.currentTarget.dataset.index)
    play(Play.photosMenuClick)
    createUmamiEvent(Events.clickPhotosMenu)
  }

  return (
    <Tab.Group>
      <div
        className={styles.container}
        onMouseEnter={() => setY(0)}
        onMouseLeave={() => setY(200)}
      >
        <div className={styles.icon}>
          <img className={styles.img} src="/images/photo.webp" alt="icon" />
        </div>
        <Tab.List ref={tabRef}>
          <motion.div
            className={styles.list}
            animate={{
              y: `${y}%`,
            }}
          >
            <motion.div
              className={styles.indicator}
              style={{
                // 四舍五入到十位
                width: `${(100 / items).toExponential(0)}%`,
              }}
              animate={{ x: `${translate}px` }}
            ></motion.div>

            {config.photos.map((photo, index) => {
              return (
                <PhotoTab
                  key={index}
                  onClick={handleIndicator}
                  data-index={index + 1}
                >
                  <div dangerouslySetInnerHTML={{ __html: photo.icon }}></div>
                </PhotoTab>
              )
            })}
          </motion.div>
        </Tab.List>
        <Tab.Panels>
          {config.photos.map((photo, index) => {
            return (
              <Tab.Panel key={index} className={styles.panel}>
                <PhotoDisplay photos={photo.imgs} />
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}
