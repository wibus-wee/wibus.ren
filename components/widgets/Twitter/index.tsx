/*
 * @FilePath: /iucky.cn/components/widgets/Twitter/index.tsx
 * @author: Wibus
 * @Date: 2022-11-24 18:36:41
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-24 22:10:24
 * Coding With IU
 */
import clsx from "clsx"
import { useEffect, useState } from "react";
import { Play, play } from "../../../utils/play.util"
import styles from "./index.module.css"
import { motion } from "framer-motion"
import { useDark } from "../../../hooks/useMedia";

export const Twitter = () => {

  const defaultColor = "#000"
  const [scale, setScale] = useState<number>(1);
  const [color, setColor] = useState<string>(defaultColor);
  const [grayColor, setGrayColor] = useState<string>("#949495");


  return (
    <div className={clsx(styles.container)}>
      <div>
        <div className={clsx(styles.innerContainer)}>
          <a className={clsx(styles.info)} href={"https://twitter.com/wibus_wee"} >
            <div className={clsx(styles.avatar)}>
              <img src="/favicon.png" alt="wibus" />
            </div>
            <motion.div className={clsx(styles.nameContainer)}
              animate={{ color }}
              transition={{ duration: 0.3 }}
            >
              <div className={clsx(styles.name)}>Wibus</div>
              <motion.div className={clsx(styles.username)}
                animate={{ color: grayColor }}
                transition={{ duration: 0.3 }}
              >@wibus_wee</motion.div>
            </motion.div>
          </a>
          <div className={clsx(styles.icon)}>
            <a href="https://twitter.com/wibus_wee" className={clsx(styles.link)}>
              <img src="/images/twitter.png" alt="twitter" />
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

              }}
            />
          </div>
        </div>
        <motion.div className={clsx(styles.content)}
          animate={{ color }}
          transition={{ duration: 0.3 }}
        >
          <p>Mog v2 的基础评论服务正在重构中！🌟</p>
          <p>希望能尽快发布。^ - ^</p>
        </motion.div>
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
        href={"https://twitter.com/wibus_wee"}
        text={"Read on Twitter"}
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