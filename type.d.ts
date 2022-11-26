/*
 * @FilePath: /iucky.cn/type.d.ts
 * @author: Wibus
 * @Date: 2022-08-07 21:14:15
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-26 16:07:04
 * Coding With IU
 */

/*
 * @FilePath: /ns-A-My/type.d.ts
 * @author: Wibus
 * @Date: 2022-05-15 16:18:12
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-15 16:29:54
 * Coding With IU
 */
import { Play } from 'utils/play.util'

type Umami = {
  trackEvent: (
    event_name: string,
    event_data?: Record<string, unknown>,
    url?: string,
    website_id?: string,
  ) => void
  trackView: (url: string, referer?: string, website_id?: string) => void
}

declare global {
  export interface History {
    backPath: string[]
  }
  export interface Window {
    [key: string]: any
    [key: Play]: HTMLAudioElement
    umami: Umami
  }
}

declare module 'react' {
  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-hide-print'?: boolean
    'aria-hidden'?: boolean
  }
}

export {}
