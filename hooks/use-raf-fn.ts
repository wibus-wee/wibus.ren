/*
 * @FilePath: /iucky.cn/hooks/use-raf-fn.ts
 * @author: Wibus
 * @Date: 2022-08-26 17:47:29
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 17:47:29
 * Coding With IU
 */

import { useState, useEffect } from "react";


export const useRafFn = (fn: () => void) => {
  const [rafId, setRafId] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      fn();
      setRafId(id);
    }
    );
    return () => cancelAnimationFrame(id);
  }
  , [rafId]);
}