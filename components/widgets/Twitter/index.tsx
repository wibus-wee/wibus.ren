/*
 * @FilePath: /iucky.cn/components/widgets/Twitter/index.tsx
 * @author: Wibus
 * @Date: 2022-11-24 18:36:41
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 16:23:35
 * Coding With IU
 */
import clsx from "clsx"
import { useState } from "react";
import { Play, play } from "../../../utils/play.util"
import styles from "./index.module.css"
import { motion } from "framer-motion"
import config from '@contents/config.json'
import Markdown from "../Markdown";

export const Twitter = () => {

  const defaultColor = "#000"
  const [scale, setScale] = useState<number>(1);
  const [color, setColor] = useState<string>(defaultColor);
  const [grayColor, setGrayColor] = useState<string>("#949495");


  return (
    <div className={clsx(styles.container)}>
      <div>
        <div className={clsx(styles.innerContainer)}>
          <a className={clsx(styles.info)} href={config.status.userlink} >
            <div className={clsx(styles.avatar)}>
              <img src={config.status.avatar} alt={config.status.username} />
            </div>
            <motion.div className={clsx(styles.nameContainer)}
              animate={{ color }}
              transition={{ duration: 0.3 }}
            >
              <div className={clsx(styles.name)}>{config.status.nickname}</div>
              <motion.div className={clsx(styles.username)}
                animate={{ color: grayColor }}
                transition={{ duration: 0.3 }}
              >@{config.status.username}</motion.div>
            </motion.div>
          </a>
          <div className={clsx(styles.icon)}>
            <a href={config.status.link} className={clsx(styles.link)}>
              <img src={config.status.icon} alt="icon" />
            </a>
            <motion.div className={clsx(styles.iconBg)}
              animate={{
                scale,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{
                backgroundColor: config.status.bgColor,
              }}
            />
          </div>
        </div>
        <motion.div className={clsx(styles.content)}
          animate={{ color }}
          transition={{ duration: 0.3 }}
          dangerouslySetInnerHTML={{ __html: config.status.content }}
        />
      </div>

      <TwitterReadBtn
        onMouseEnter={() => {
          setScale(40);
          setColor("#fff");
          setGrayColor("#dfdfdf");
        }}
        onMouseLeave={() => {
          setScale(1);
          setColor(defaultColor);
          setGrayColor("#949495");
        }}
        color={color}
        href={config.status.link}
        text={config.status.text}
      />
    </div>
  )
}

export const TwitterReadBtn = ({ href, text, onMouseEnter, onMouseLeave, color }) => {
  return (
    <a className={clsx(styles["btn"])} href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => {
        play(Play.twitterSound)
        onMouseEnter()
      }}
      onMouseLeave={() => {
        onMouseLeave()
      }}
    >
      <div className={clsx(styles.inner)}>
        <motion.p className={clsx(styles.text)}
          animate={{ color }}
          transition={{ duration: 0.3 }}
        >{text}</motion.p>
      </div>
    </a>
  )
}