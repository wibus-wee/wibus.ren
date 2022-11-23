/*
 * @FilePath: /iucky.cn/components/layouts/Nav/index.tsx
 * @author: Wibus
 * @Date: 2022-11-23 13:39:59
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-23 17:12:36
 * Coding With IU
 */
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useRef, useState } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import config from '../../../contents/config.json'
import { Play, play } from "../../../utils/play.util";

export const Nav = () => {


  const router = useRouter()
  const groupRef = useRef<HTMLDivElement>(null)

  const pathMatch = useMemo(() => {
    const asPath = router.asPath;
    const path = asPath.split("/")[1];
    return path;
  }, [router.asPath]);
  const [translatePresent, setTranslatePresent] = useState(0);
  const handleIndicator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTranslatePresent(Number(e.currentTarget.dataset.index) * 100);
    play(Play.navClick)
  }


  return (
    <div className={clsx("z-40", styles.container)}>
      <div ref={groupRef} className={styles.nav}>
        <motion.a id="indicator" href="#" className={clsx(styles["floating-indicator"])}
          animate={{ x: `${translatePresent}%` }}
        />
        {
          config.nav.map((item, index) => {
            return (
              <Link href={`/${item.path}`} key={index} className={clsx(styles["nav-item"], "nav-item")} data-index={index} onClick={handleIndicator}>
                <div className={clsx(styles["nav-text"], pathMatch === item.path && styles["active"])}>
                  {item.text}
                </div>
              </Link>
            )
          })
        }

      </div>
    </div>
  )
};