/*
 * @FilePath: /iucky.cn/utils/umami.util.ts
 * @author: Wibus
 * @Date: 2022-11-26 16:14:57
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:14:57
 * Coding With IU
 */

export const createUmamiEvent = (event: string) => {
  if (typeof window !== 'undefined') {
    window.umami?.trackEvent(event)
  }
}
