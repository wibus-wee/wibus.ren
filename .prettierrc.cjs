/*
 * @FilePath: /iucky.cn/.prettierrc.cjs
 * @author: Wibus
 * @Date: 2022-08-09 13:14:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 17:04:35
 * Coding With IU
 */
module.exports = {
  ...require('@innei/prettier'),
  importOrder: [
    '^@(.*)/(.*)$',
    '^~/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
}
