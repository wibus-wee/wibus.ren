/*
 * @FilePath: /iucky.cn/utils/umami.util.ts
 * @author: Wibus
 * @Date: 2022-11-26 16:14:57
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:14:57
 * Coding With IU
 */
import config from '@contents/config.json'

export const createUmamiEvent = (event: string) => {
  if (typeof window !== 'undefined' && config.umami.config.eventListener) {
    window.umami?.trackEvent(event)
  }
}
