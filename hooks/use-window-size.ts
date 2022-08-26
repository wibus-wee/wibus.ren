/*
 * @FilePath: /iucky.cn/hooks/use-window-size.ts
 * @author: Wibus
 * @Date: 2022-08-26 17:34:29
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 17:34:29
 * Coding With IU
 */

import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }
  , []);
  return windowSize;
}