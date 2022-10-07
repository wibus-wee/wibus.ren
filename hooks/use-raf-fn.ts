/*
 * @FilePath: /iucky.cn/hooks/use-raf-fn.ts
 * @author: Wibus
 * @Date: 2022-08-26 17:47:29
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-07 20:34:04
 * Coding With IU
 */

import * as React from 'react';

type Fn = () => void;

export function useRafFn(fn: Fn) {
  const isActive = React.useRef(false);
  let rafId: null | number = null;

  const loop = () => {
    if (!isActive.current || !window) return;

    fn();
    rafId = window.requestAnimationFrame(loop);
  };

  const resume = () => {
    if (!isActive.current && window) {
      isActive.current = true;
      loop();
    }
  };

  const pause = () => {
    isActive.current = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  return {
    isActive,
    pause,
    resume,
  };
}