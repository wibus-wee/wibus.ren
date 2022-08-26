/*
 * @FilePath: /nx-theme-tiny/type.d.ts
 * @author: Wibus
 * @Date: 2022-08-07 21:14:15
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-07 21:14:15
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

declare global {
  export interface History {
    backPath: string[]
  }
  export interface Window {
    [key: string]: any
  }
}

declare module 'react' {
  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-hide-print'?: boolean
    'aria-hidden'?: boolean
  }
}

export {}