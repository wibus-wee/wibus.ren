/*
 * @FilePath: /iucky.cn/components/widgets/Photos/index.tsx
 * @author: Wibus
 * @Date: 2022-11-25 09:47:36
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 12:02:11
 * Coding With IU
 */
import { Tab } from "@headlessui/react"
import { Block } from "../../../public/iconsTS/block"
import { Heart } from "../../../public/iconsTS/heart"
import { Play, play } from "../../../utils/play.util"
import { motion } from "framer-motion"
import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"

const PhotoTab = ({ onClick = (e: React.MouseEvent<HTMLButtonElement>) => { }, children, ...props }) => {
  return (
    <Tab className={styles.tab}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tab>
  )
}

const PhotoDisplay = ({ photos, position = "center", ...props }: {
  photos: string[],
  position?: string | string[],
  [key: string]: any
}) => {
  const [current, setCurrent] = useState(0)
  const [imagePosition, setImagePosition] = useState("center")
  const [imageSrc, setImageSrc] = useState(photos[0])

  useEffect(() => {
    setImagePosition(typeof position === "string" ? position : position[current])
    setImageSrc(photos[current])
  }, [current])

  return (
    <div className={styles.photo}
      style={{
        backgroundImage: `url(/photos/${imageSrc})`,
        backgroundPosition: imagePosition,
      }}
      onClick={() => {
        setCurrent((current + 1) % photos.length)
        play(Play.photosClick)
      }}
    ></div>
  )
}

export const Photos = () => {

  const [translate, setTranslate] = useState(0);
  const [items, setItems] = useState(0);

  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems(document.querySelectorAll("[id^='headlessui-tabs-tab-']").length)
  }, [])

  const handleIndicator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const width = tabRef.current?.clientWidth || 100;
    const persent = (width / items).toFixed(2)
    if (!e.currentTarget.dataset.index) return
    setTranslate(Number(Number(e.currentTarget.dataset.index) - 1) * Number(persent))
    console.log(e.currentTarget.dataset.index)
    play(Play.photosMenuClick)
  }

  return (
    <Tab.Group>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img className={styles.img} src="/images/photo.webp" alt="icon" />
        </div>
        <Tab.List className={styles.list} ref={tabRef}>
          <motion.div className={styles.indicator}
            animate={{ x: `${translate}px` }}
          ></motion.div>
          <PhotoTab onClick={handleIndicator} data-index={1}>
            <Block />
          </PhotoTab>
          <PhotoTab onClick={handleIndicator} data-index={2}>
            <Heart />
          </PhotoTab>
          <PhotoTab onClick={handleIndicator} data-index={3}>
            <Block />
          </PhotoTab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={styles.panel}>
            <PhotoDisplay photos={["1.png", "2.png", "3.jpg"]} />
          </Tab.Panel>
          <Tab.Panel className={styles.panel}>
          <PhotoDisplay photos={["2.png"]} position="0% 0%" />
          </Tab.Panel>
          <Tab.Panel className={styles.panel}>
            <PhotoDisplay photos={["3.jpg"]} />
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}